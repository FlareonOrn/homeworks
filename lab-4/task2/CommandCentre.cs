using System;
using System.Collections.Generic;
using System.Linq;

namespace DesignPatterns.Mediator
{
    class CommandCentre
    {
        private List<Runway> _runways = new List<Runway>();
        private List<Aircraft> _aircrafts = new List<Aircraft>();

        public CommandCentre(Runway[] runways, Aircraft[] aircrafts)
        {
            this._runways.AddRange(runways);
            this._aircrafts.AddRange(aircrafts);
        }

        public void Land(Aircraft aircraft)
        {
            var availableRunway = _runways.FirstOrDefault(r => r.IsBusyWithAircraft == null);
            if (availableRunway != null)
            {
                Console.WriteLine($"Aircraft {aircraft.Name} is landing.");
                availableRunway.IsBusyWithAircraft = aircraft;
                availableRunway.HighLightRed();
            }
            else
            {
                Console.WriteLine($"Aircraft {aircraft.Name} could not land, all runways are busy.");
            }
        }

        public void TakeOff(Aircraft aircraft)
        {
            var runway = _runways.FirstOrDefault(r => r.IsBusyWithAircraft == aircraft);
            if (runway != null)
            {
                Console.WriteLine($"Aircraft {aircraft.Name} is taking off.");
                runway.IsBusyWithAircraft = null;
                runway.HighLightGreen();
            }
            else
            {
                Console.WriteLine($"Aircraft {aircraft.Name} is not on any runway.");
            }
        }
    }
}
