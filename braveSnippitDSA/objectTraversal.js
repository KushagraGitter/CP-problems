const obj = {
  a: { b: { c: 'done' } },
  hello: { world: { foo: { bar: 'wrong' } } },
  second: { third: 'wrong' }
};

const path = 'hello.prototype';
let returnPath = null;

function objTraversal(obj, path, index) {
  if(index === path.split('.').length)
        return obj;
  //split path;
  let pathArray = path.split('.');
  for (let i = index; i < pathArray.length; i++) {
    const currObj = obj[pathArray[i]];
    if (currObj) {
       return objTraversal(currObj, path, index + 1)
    }
    else {
        return null;
    }
  }
}

objTraversal(obj, path, 0)