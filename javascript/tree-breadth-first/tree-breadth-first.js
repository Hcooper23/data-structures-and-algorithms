function breadthFirst(tree) {

  if (!tree) {

    return [];

  }



  var result = [];

  var queue = [];

  queue.push(tree);



  while (queue.length > 0) {

    var node = queue.shift();

    result.push(node.value);



    if (node.left) {

      queue.push(node.left);

    }



    if (node.right) {

      queue.push(node.right);

    }

  }



  return result;

}
