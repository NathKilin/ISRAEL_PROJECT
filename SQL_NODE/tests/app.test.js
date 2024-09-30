const request = require('supertest');
const app = require('../server.js');
let server;

beforeAll((done) => {
  // Inicie o servidor em uma porta diferente para os testes
  server = app.listen(4000, () => {
    global.agent = request.agent(server);
    done();
  });
});

afterAll((done) => {
  // Feche o servidor após os testes
  server && server.close(done);
});

describe("GET /data", () => {
  it("should respond with JSON data", async () => {
    const response = await request(app).get("/data");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
  });

  it("should respond with status code 200", async () => {
    const response = await request(app).get("/data");
    expect(response.statusCode).toBe(200);
  });
});

describe("add", () => {
  test("return success", () => {
    expect(app.add()).toBe("success");
  });
});

describe("sum", () => {
  test("sum two positive numbers", () => {
    expect(app.sum(1, 3)).toBe(4);
  });
});
