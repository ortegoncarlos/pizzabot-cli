/**
 * This class is a service with all the methods for pizzabot.
 * you can pass the arguments in a string format, and it will validate the input, 
 * and give the correct directions for pizzabot.
 * 
 * you should pass first the size of the canvas in two numbers separated with an x
 * 
 * Then the coordinated, separated with space and inside a parentheses 
 * @param args string in format "5x5 (1,1) (1,1) ..."
 */

 class PizzaService {
    constructor(args){
        this.size_array = PizzaService.validate_canvas(args) 
        this.stops = PizzaService.validate_coordinates(args,this.size_array)
        this.current_location = [0,0]
        this.directions = []
    }

    
    static validate_canvas(args){
        let size_array        
        try {
            //evaluate the size of the canvas
            if (!args){ throw new Error( "Not enough arguments, pizzabot is sad º¬º")}
            let size_canvas = args.split(" ")[0].split("x")
            if (size_canvas.length !== 2){
                throw new Error( `Size argument is in the wrong format must have an x, pizzabot is confuse and will not go there º~º `)
            }
            if (
                typeof parseInt(size_canvas[0]) != "number" ||
                typeof parseInt(size_canvas[1]) != "number" ||
                isNaN(parseInt(size_canvas[0])) ||
                isNaN(parseInt(size_canvas[1]))
                ){ 
                    throw new Error( "Size argument is kind of wired, pizzabot is confuse ºoº")
                }
            size_array = [parseInt(size_canvas[0]), parseInt(size_canvas[1])]
            return size_array
        }catch (err){
            console.error( err.message || "Size argument is kind of wired, pizzabot is confuse ºoº" ) 
            process.exit(1)
        }
    }

    static validate_coordinates(args,size_array){
        try {
            let argsArray = []
            // Get all the coordinates, tooked from stack overflow https://stackoverflow.com/questions/17779744/regular-expression-to-get-a-string-between-parentheses-in-javascript
            var regExp = /\(([^)]+)\)/g;
            var matches = args.match(regExp);
            if (!matches) { throw new Error("No stops, pizzabot is worry º:º, pizzabot will eat pizza")}
            for (var i = 0; i < matches.length; i++) {
                var str = matches[i];
                argsArray.push(str.substring(1, str.length - 1))    
            }    
            let count = 1
            let stops = []
            for (let stop of argsArray ){
                stop = stop.replace("(","").replace(")","").replace(" ","").split(",")
                if (stop.length !== 2){
                    throw new Error( `Stop ${count} is in the wrong format, pizzabot is confuse and will not go there º~º `)
                }
                count ++
                if (
                    typeof parseInt(stop[0]) != "number" ||
                    typeof parseInt(stop[1]) != "number" ||
                    isNaN(parseInt(stop[0])) ||
                    isNaN(parseInt(stop[1]))
                    
                    ){ 
                        throw new Error( "Stop is in the wrong format, pizzabot is confuse and will not go there º~º ")
                    }
                if (stop[0]>size_array[0] || stop[1]>size_array[1]) {throw new Error( "Stop is out of space, pizzabot is angry was confused with astrobot º>º ")}
                stops.push([parseInt(stop[0]),parseInt(stop[1])])
            }
            return stops
        }catch (err) {
            console.error( err.message) 
            process.exit(1)
        }

    }

    move(diff,side="X"){
        if (side == "Y"){
            let direction = "N"
            this.current_location[1] += diff 
            if(diff < 0){ direction = "S" }
            for(var i = 0; i < Math.abs(diff); i++){
                this.directions.push(direction)
            }
        } else {
            let direction = "E"
            this.current_location[0] += diff
            if(diff < 0){direction = "W" }
            for(var i = 0; i < Math.abs(diff); i++){
                this.directions.push(direction)
            }
        }
        return true
        
        
    }

    moveToStop(stop){
        let diff_x = stop[0] - this.current_location[0]
        let diff_y = stop[1] - this.current_location[1]
        if (diff_x === 0 && diff_y === 0){
            return this.directions.push("D")
        }
        this.move(diff_x, "X")
        this.move(diff_y, "Y")
        return this.directions.push("D")
        
    }

    iterate_over_stops(){
        
        for (let stop of this.stops){
            this.moveToStop(stop)
        }
        return this.directions.join("")
    
    }


}

module.exports = PizzaService;