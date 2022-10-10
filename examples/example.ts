type Car = {
  manufacturer: string;
  modelName: string;
  modelYear: number;
  isAllWheelDrive: boolean;
};

interface ICar {
  manufacturer: string;
  modelName: string;
}

interface ICar {
  modelYear: number;
  isAllWheelDrive: boolean;
}

const createBMW = (
  name: string,
  modelYear: number,
  isAllWheelDrive = false
): Car => ({
  manufacturer: "BMW",
  modelName: name,
  modelYear,
  isAllWheelDrive,
});

const x5: Car = createBMW("x5", 2020, true);
const z1: Car = createBMW("z1", 1990, false);

const printDetails = (car: Car): void => {
  console.log(
    `Model ${car.modelName} was manufactured by ${car.manufacturer} in ${car.modelYear}.`
  );
  if (car.isAllWheelDrive) {
    console.log("This model is all-wheel drive.");
  } else {
    console.log("This model is not all-wheel drive.");
  }
};

function printCar(car?: Car): void {
  if (!car) {
    console.log("No car was provided...");
  } else {
    console.log(car);
  }
}

function printSeparator() {
  console.log("--------------");
}

printDetails(x5);
printSeparator();
printDetails(z1);
printSeparator();
printCar();
