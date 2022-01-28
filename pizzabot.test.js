const PizzaService = require('./pizzabot')



test('5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)', () => {
    const pizzabot = new PizzaService('5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)')
    expect(pizzabot.iterate_over_stops()).toBe("DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD")
  });

  beforeAll(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });
  afterAll(() => {
    global.console.error.mockRestore();
  });
  
it('tests Wrong canvas format', async () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((code=0) => { throw new Error(`Process.exit(${code})`) });

    try{
        const pizzabot = new PizzaService('5 (1, 3) (4, 4)')
        expect(()=>pizzabot.iterate_over_stops()).toThrowErrorMatchingSnapshot()
        expect(mockExit).toHaveBeenCalled()
        mockExit.mockRestore();
        expect(console.error).toHaveBeenCallTimes(1);
    } catch(error) {
        expect(error.message).toBe("Process.exit(1)");
    }
    
        
  });

  it('tests Wrong canvas format variant', async () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((code=0) => { throw new Error(`Process.exit(${code})`) });

    try{
        const pizzabot = new PizzaService('5xA (1, 3) (4, 4)')
        expect(()=>pizzabot.iterate_over_stops()).toThrowErrorMatchingSnapshot()
        expect(mockExit).toHaveBeenCalled()
        mockExit.mockRestore();
        expect(console.error).toHaveBeenCallTimes(1);
    } catch(error) {
        expect(error.message).toBe("Process.exit(1)");
    }
    
        
  });
  it('tests Not enough arguments', async () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((code=0) => { throw new Error(`Process.exit(${code})`) });

    try{
        const pizzabot = new PizzaService('5x5')
        expect(()=>pizzabot.iterate_over_stops()).toThrowErrorMatchingSnapshot()
        expect(mockExit).toHaveBeenCalled()
        mockExit.mockRestore();
        expect(console.error).toHaveBeenCallTimes(1);
    } catch(error) {
        expect(error.message).toBe("Process.exit(1)");
    }
    
        
  });

  it('tests Not arguments at all', async () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((code=0) => { throw new Error(`Process.exit(${code})`) });

    try{
        const pizzabot = new PizzaService('')
        expect(()=>pizzabot.iterate_over_stops()).toThrowErrorMatchingSnapshot()
        expect(mockExit).toHaveBeenCalled()
        mockExit.mockRestore();
        expect(console.error).toHaveBeenCallTimes(1);
    } catch(error) {
        expect(error.message).toBe("Process.exit(1)");
    }
    
        
  });


  it('tests wrong format coordinates', async () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((code=0) => { throw new Error(`Process.exit(${code})`) });

    try{
        const pizzabot = new PizzaService('5x5 (1) (4, 4)')
        expect(()=>pizzabot.iterate_over_stops()).toThrowErrorMatchingSnapshot()
        expect(mockExit).toHaveBeenCalled()
        mockExit.mockRestore();
        expect(console.error).toHaveBeenCallTimes(1);
    } catch(error) {
        expect(error.message).toBe("Process.exit(1)");
    }
    
        
  });

  it('tests wrong format coordinates varianr', async () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((code=0) => { throw new Error(`Process.exit(${code})`) });

    try{
        const pizzabot = new PizzaService('5x5 (1,das) (4, 4)')
        expect(()=>pizzabot.iterate_over_stops()).toThrowErrorMatchingSnapshot()
        expect(mockExit).toHaveBeenCalled()
        mockExit.mockRestore();
        expect(console.error).toHaveBeenCallTimes(1);
    } catch(error) {
        expect(error.message).toBe("Process.exit(1)");
    }
    
        
  });


  it('coordinates out of canvas', async () => {
    const mockExit = jest.spyOn(process, 'exit')
        .mockImplementation((code=0) => { throw new Error(`Process.exit(${code})`) });

    try{
        const pizzabot = new PizzaService('1x1 (5,5) (4, 4)')
        expect(()=>pizzabot.iterate_over_stops()).toThrowErrorMatchingSnapshot()
        expect(mockExit).toHaveBeenCalled()
        mockExit.mockRestore();
        expect(console.error).toHaveBeenCallTimes(1);
    } catch(error) {
        expect(error.message).toBe("Process.exit(1)");
    }
    
        
  });