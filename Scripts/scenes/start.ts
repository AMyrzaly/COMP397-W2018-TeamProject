module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    // Private Methods
    

    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
     
      this.Main();
    }

    public Update(): void {

    }

    // This is where the fun happens
    public Main(): void {
    }
  }
}
