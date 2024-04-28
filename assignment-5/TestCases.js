describe("Location of Vegan Check Box", () => {
  it("should check the exact location of the vegan check box", () => {
    cy.get("#vegan-checkbox").then(($el) => {
      const rect = $el[0].getBoundingClientRect();
      expect(rect.top).to.be.closeTo(625, 10);
      expect(rect.left).to.be.closeTo(405, 10);
    });
  });
});

describe("Existence and Visibility of Vegan Check Box", () => {
  it("should check if the vegan check box exists and is visible", () => {
    cy.get("#vegan-checkbox").should("exist").and("be.visible");
  });
});

describe("Location of Grocery Store Input Box in Grocery Store Selection Page", () => {
  it("should check the location of the grocery store input box", () => {
    cy.get("#grocery-store-input").then(($el) => {
      const rect = $el[0].getBoundingClientRect();
      expect(rect.top).to.be.closeTo(610, 10);
      expect(rect.left).to.be.closeTo(480, 10);
    });
  });
});

describe("Existence and Visibility of Grocery Store Input Box", () => {
  it("should check if the grocery store input box exists and is visible", () => {
    cy.get("#grocery-store-input").should("exist").and("be.visible");
  });
});

describe("Location of Name Input Box in Final Review Page", () => {
  it("should check the location of the name input box in the final review page", () => {
    cy.get("#grocery-store-input").type("Trader Joes");
    cy.get("#next-button-destination").click();
    cy.get("#pickup-radio-button").should("exist");
    cy.get("#add-item-input").type("Apple");
    cy.get("#next-button-itinerary").click();
    cy.get("#postal-radio-button").should("exist");
    cy.get("#name-input").then(($el) => {
      const rect = $el[0].getBoundingClientRect();
      expect(rect.top).to.be.closeTo(880, 10);
      expect(rect.left).to.be.closeTo(260, 10);
    });
  });
});

describe("Page Navigation from Grocery Store Selection to Cart Builder", () => {
  it("should navigate from the grocery store selection page to the cart builder page", () => {
    cy.get("#grocery-store-input").type("Trader Joes");
    cy.get("#next-button-destination").click();
    cy.get("#pickup-radio-button").should("exist");
  });
});

describe("Size of Grocery Store Input Box", () => {
  it("should check the size of the grocery store input box", () => {
    cy.get("#grocery-store-input").then(($input) => {
      expect($input).to.have.css("width", "139px");
      expect($input).to.have.css("height", "15.5px");
    });
  });
});

describe("Content of Grocery Store Input Box", () => {
  it("should check the content of the grocery store input box", () => {
    const expectedInput = "Walmart";
    cy.get("#grocery-store-input").type(expectedInput);
    cy.get("#grocery-store-input").should("have.value", expectedInput);
  });
});

describe("Page Navigation from Cart Builder to Final Review", () => {
  it("should navigate from the cart builder page to the final payment review page", () => {
    cy.get("#grocery-store-input").type("Walmart");
    cy.get("#next-button-destination").click();
    cy.get("#pickup-radio-button").should("exist");
    cy.get("#add-item-input").type("Apple");
    cy.get("#next-button-itinerary").click();
    cy.get("#postal-radio-button").should("exist");
  });
});

describe("Existence and Visibility of Grocery Store Input Box", () => {
  it("should check if the grocery store input box exists and is visible", () => {
    cy.get("#grocery-store-input").should("exist").and("be.visible");
  });
});
