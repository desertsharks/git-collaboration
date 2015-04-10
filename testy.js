describe("LinkedList", function() {

  beforeEach(function() {
    var linkedList = new LinkedList();
  });

  it("Has push and pop methods.", function() {
    expect(linkedList.push).toBeTruthy();
    expect(linkedList.pop).toBeTruthy();
  });

  it("contains a head and a tail", function() {
    expect(linkedList.head).toBeDefined();
    expect(linkedList.tail).toBeDefined();
  });

  describe("push", function() {
    it("Pushes to the head and tail if there is not one", function() {
      linkedList.push(4);
      expect(linkedList.head.value).toBe(4);
    });
  })
})