import axios from "axios";

import api from "./Api";

jest.mock("axios");

it("has a signIn service", () => {
  expect.assertions(1);
  axios.__response = { data: { success: true } };
  return api
    .signIn("user", "password")
    .then(data => expect(data.success).toEqual(true));
});

it("has a loadStores service", () => {
  expect.assertions(1);
  axios.__response = { data: ["Store1", "Store2"] };
  return api
    .loadStores("user", "password")
    .then(data => expect(data).toEqual(["Store1", "Store2"]));
});

it("has a loadCousines service", () => {
  expect.assertions(1);
  axios.__response = { data: ["Cousine1", "Cousine2"] };
  return api
    .loadCousines("user", "password")
    .then(data => expect(data).toEqual(["Cousine1", "Cousine2"]));
});
