angular
  .module("codecraft")
  .factory("DataService", function() {
    var data = {
      name: "Kaivalya",
      age: 21,
      setData: function(new_data) {
        this.name = new_data.name;
        this.age = new_data.age;
        return data;
      },
      getData: function() {
        return data;
      }
    };

    return data;
  });
