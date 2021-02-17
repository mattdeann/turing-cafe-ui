describe("homepage", () => {

  it("displays the homepage", () => {
    cy.visit("http://localhost:3000/")
    cy.get("h1").should("have.text", "Turing Cafe Reservations")
    .get("input#name").should("have.id", "name")
    .get("input#date").should("have.id", "date")
    .get("input#time").should("have.id", "time")
    .get("input#number").should("have.id", "number")
    .get("button").eq(0).should("have.text", "Submit")
    .get("main").get("article").should("have.length", 9)
    .get("main").get("article").get("h2").first().should("have.text", "Christie")
    .get("p").first().should("have.text", "12/29")
    .get("p").eq(1).should("have.text", "7:00")
    .get("p").eq(2).should("have.text", "Number of guests: 12")
    .get("button").eq(1).should("have.text", "Cancel")
  })

  it("updates the form", () => {
    cy.visit("http://localhost:3000/")
    .get("input#name").type("Matthew").should("have.value", "Matthew")
    .get("input#date").type("2020-02-17").should("have.value", "2020-02-17")
    .get("input#time").type("14:00").should("have.value", "14:00")
    .get("input#number").type("5").should("have.value", "5")
  })

  it("adds a reservation", () => {
    cy.visit("http://localhost:3000/")
    .get("input#name").type("Matthew")
    .get("input#date").type("2020-02-17")
    .get("input#time").type("14:00")
    .get("input#number").type("5")
    .get("button").first().click()
    .get("h2").eq(9).should("have.text", "Matthew")
    .get("p").eq(-3).should("have.text", "2020-02-17")
    .get("p").eq(-2).should("have.text", "14:00")
    .get("p").eq(-1).should("have.text", "Number of guests: 5")
    .get("button").eq(9).should("have.text", "Cancel")
  })


})