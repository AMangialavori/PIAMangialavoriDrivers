const server = require("../server");
const session = require("supertest");
const request = session(server);
// const { Driver, sequelize } = require("../models/Driver");

const driver = {
  forename: "Ana",
  surname: "Mangialavori",
  dob: "1986-05-06",
  description: "Corredora de 37 años campeona",
  nationality: "Italiana",
  image:
    "https://cdn-4.motorsport.com/images/mgl/0ZRjL9M0/s1000/red-bull-racing-2022-f1-car-1.webp",
  teams: "McLaren, Mercedes",
};
// let createdDriverId;

// beforeAll(async () => {
//   await sequelize.sync();
// });

describe("test de RUTAS", () => {
  describe("POST /formula1/drivers/", () => {
    it("Debe guardar el driver y responder con el mensaje 'El driver se creó exitosamente'", async () => {
      const response = await request.post("/formula1/drivers/").send(driver);
      expect(response.statusCode).toBe(201);
      expect(response.text).toBe("El driver se creó exitosamente");
    });

    // const createdDriver = await Driver.findOne({
    //   where: {
    //     forename: driver.forename,
    //     surname: driver.surname,
    //   },
    // });
    // createdDriverId = createdDriver.id;

    it("No debe guardar drivers que ya existen, debe devolver status 400 y el mensaje 'El driver ya existe'", async () => {
      const response = await request.post("/formula1/drivers/").send(driver);
      expect(response.statusCode).toBe(400);
      expect(response.body).toEqual({ error: "El driver ya existe" });
    });
  });
  describe("GET /formula1/drivers/detail/:idDriver", () => {
    it("Responde con status:200", async () => {
      const response = await request.get("/formula1/drivers/detail/1");
      expect(response.statusCode).toBe(200);
    });
    it("responde un objeto con las propiedades: 'id','forename','surname','dob', 'description','nationality','image', 'teams'", async () => {
      const response = await request.get("/formula1/drivers/detail/1");
      const props = [
        "id",
        "forename",
        "surname",
        "dob",
        "description",
        "nationality",
        "image",
        "teams",
      ];
      props.forEach((prop) => {
        expect(response.body).toHaveProperty(prop);
      });
    });
    it("si hay un error responde con status:400", async () => {
      const response = await request.get(
        "/formula1/drivers/detail/0c488157-d72b-45b9-aa1f-8efda89ec93e"
      );
      expect(response.statusCode).toBe(400);
    });
  });
  //   describe("DELETE /formula1/drivers/:id", () => {
  //     it("Elimina el driver y responde con el mensaje 'Driver removed'", async () => {
  //       const response = await request.delete(
  //         `/formula1/driver/${createdDriverId}`
  //       );

  //       expect(response.text).toBe("Driver removed");
  //       expect(response.statusCode).toBe(200);
  //     });
  //     it("Si no existe el Driver con ese id responde con el mensaje 'Error removing driver'", async () => {
  //       const response = await request.delete(
  //         "/formula1/driver/0c488157-d72b-45b9-aa1f-8efda89ec93e"
  //       );
  //       expect(response.text).toBe("Error removing driver");
  //     });
  //   });
  // });

  // afterAll(async () => {
  //   await sequelize.close();
});
