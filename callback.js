function mainFunc(cb) {

  cb();
  console.log('called first');
}

mainFunc(function(){
  console.log('called second')
})
