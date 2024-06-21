# Zoo Accounting System

This project is a Zoo Accounting System implemented in Node.js, following various software design principles to ensure maintainability, flexibility, and scalability.

## Principles Used

1. **DRY (Don't Repeat Yourself)**
    - The code reuses common logic through base classes and interfaces to avoid duplication.
    - Example: [Animal Classes](./animals.js), [Worker Classes](./workers.js)

2. **SOLID**
    - **Single Responsibility Principle (SRP)**: Each class has a single responsibility.
        - Example: [Animal Class](./animals.js), [Cage Class](./cages.js)
    - **Open/Closed Principle (OCP)**: Classes are open for extension but closed for modification.
        - Example: [Extending Animal Class](./animals.js)
    - **Liskov Substitution Principle (LSP)**: Subtypes can be substituted for their base types.
        - Example: [Lion and Elephant as Animals](./animals.js)
    - **Interface Segregation Principle (ISP)**: Clients should not be forced to depend on interfaces they do not use.
        - Example: [Interfaces Definition](./interfaces.js)
    - **Dependency Inversion Principle (DIP)**: Depend on abstractions rather than concrete implementations.
        - Example: [Program to Interfaces](./interfaces.js)

3. **YAGNI (You Ain't Gonna Need It)**
    - Only implemented necessary functionalities.
    - Example: [Main Application](./app.js)

4. **KISS (Keep It Simple, Stupid)**
    - The design is kept simple and straightforward.
    - Example: [Main Application](./app.js)

5. **Composition over Inheritance**
    - Preferred composition to inheritance to promote flexibility.
    - Example: [ZooInventory Class](./inventory.js)

6. **Program to Interfaces, Not Implementations**
    - Used interfaces to define the behavior.
    - Example: [Interfaces Definition](./interfaces.js)

7. **Fail Fast**
    - Simple constructors and method calls ensure early failure in case of errors.
    - Example: [Main Application](./app.js)

## Project Structure

- `interfaces.js`: Defines the interfaces for various entities.
- `animals.js`: Implements different species and subspecies of animals.
- `cages.js`: Implements different types and sizes of cages.
- `food.js`: Implements different types of food for animals.
- `workers.js`: Implements different types of zoo workers.
- `inventory.js`: Displays information about available animals, number of employees, etc.
- `app.js`: Main application that combines all classes to create a functional zoo accounting system.

## How to Run

1. Clone the repository.
2. Install the necessary dependencies (if any).
3. Run the main application.

```sh
node app.js
