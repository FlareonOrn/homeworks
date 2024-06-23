using System;

namespace DesignPatterns.Mediator
{
    class Program
    {
        static void Main(string[] args)
        {
            Runway runway1 = new Runway();
            Runway runway2 = new Runway();
            Aircraft aircraft1 = new Aircraft("Aircraft 1", null);
            Aircraft aircraft2 = new Aircraft("Aircraft 2", null);

            CommandCentre commandCentre = new CommandCentre(new Runway[] { runway1, runway2 }, new Aircraft[] { aircraft1, aircraft2 });

            // Set the CommandCentre for each Aircraft
            aircraft1 = new Aircraft("Aircraft 1", commandCentre);
            aircraft2 = new Aircraft("Aircraft 2", commandCentre);

            aircraft1.Land();
            aircraft2.Land();
            aircraft1.TakeOff();
            aircraft2.Land();
            aircraft2.TakeOff();
        }
    }
}
