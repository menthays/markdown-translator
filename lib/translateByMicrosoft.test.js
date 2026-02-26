const translateByMicrosoft = require("./translateByMicrosoft")
// @ponicode
describe("translateByMicrosoft.translate", () => {
    test("0", () => {
        let callFunction = () => {
            translateByMicrosoft.translate(["foo bar", -0.353, "**text**", 4653], { from: "./path/to/file", to: "C:\\\\path\\to\\file.ext", subscriptionKey: "Manager", region: "P5" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            translateByMicrosoft.translate(["foo bar", -0.353, "**text**", 4653], { from: "path/to/file.ext", to: "C:\\\\path\\to\\file.ext", subscriptionKey: "Developer", region: "project_secret_" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            translateByMicrosoft.translate(["foo bar", -0.353, "**text**", 4653], { from: "path/to/folder/", to: ".", subscriptionKey: false, region: "fake_project" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            translateByMicrosoft.translate([10, -45.9, 103.5, 0.955674], { from: "path/to/folder/", to: ".", subscriptionKey: "Producer", region: 12 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            translateByMicrosoft.translate(["foo bar", -0.353, "**text**", 4653], { from: "C:\\\\path\\to\\folder\\", to: "path/to/folder/", subscriptionKey: false, region: 12 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            translateByMicrosoft.translate(undefined, { from: "", to: "", subscriptionKey: null, region: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
