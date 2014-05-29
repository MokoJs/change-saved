module.exports = function(Model) {
  Model.on('saving', function*(instance, dirty) {
    instance.once('save', function() {
      for(var attr in dirty) {
        var event = attr + ' change saved';
        instance.emit(event, instance[attr]);
        Model.emit(event, instance, instance[attr]);
      }
    });
  });
};
