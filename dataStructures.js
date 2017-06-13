//===== #1 ARRAYS & STATS=====

var array = [15, 47, 14, 42, 31,
81, 4, 14, 77, 82,
25, 13, 18, 14, 33,
10, 64, 43, 41, 5,
59, 31, 15, 80, 26,
66, 50, 35, 77, 46,
98, 26, 42, 8, 76,
60, 81, 78, 45, 86,
69, 37, 75, 76, 20,
32, 78, 4, 55, 8,
89, 62, 50, 13, 74,
94, 86, 51, 36, 42,
87, 17, 42, 25, 35,
90, 57, 77, 60, 29,
14, 60, 57, 81, 26,
46, 99, 47, 65, 61,
63, 15, 72, 38, 71,
67, 29, 72, 25, 33,
70, 63, 23, 33, 84,
91, 26, 31, 59, 1]

// (1) Minimim value in an array
var min = Infinity;

var minValue = function(arr) {
  for (var i = 0; arr.length > i; i++)
  if (array[i] < min) {
    min = array[i];
  };
  console.info("The minimum value of this array is: " + min);
};
minValue(array);


// (2) Maximum value in an array
var max = -Infinity;

var maxValue = function(arr) {
  for (var i = 0; arr.length > i; i++)
  if (array[i] > max) {
    /* console.log("This is the number I'm coparing: " + Numbers[i] + "\n" +
    "And this is the max number: " + max + "\n" +
    "If " + Numbers[i] + " is greater than " + max + " then keep going."); */
    max = array[i];
  };
  console.info("The maximum value of this array is: " + max);
};
maxValue(array);


// (3) Total sumation of array


var totalValue = function(arr) {
  var sum = 0;
  for (var i = 0; arr.length > i; i++) {
    sum += arr[i];
  };
  console.log("The total sum of values in array is: " + sum);
};

totalValue(array);


// (4) Average value
var avgValue = function(arr) {
  var sum = 0;
  for (var i = 0; arr.length > i; i++) {
  sum += arr[i];
};
  var average = sum / arr.length;
  console.log("The average value of values in array is: " + average);
  return average;
};

avgValue(array);


// (5) Variance and Standard Deviation;
var varianceValue = function(arr) {
  var average = avgValue(arr);
  var numDiffMeanSqSum = 0
  for (var i = 0; arr.length > i; i++) {
    numDiffMeanSqSum += Math.pow((arr[i] - average), 2);
  };
  var variance = numDiffMeanSqSum / arr.length;
  console.log("The variance of values in array is: " + variance);
  return variance;
};

varianceValue(array);


/* ARRAY TESTS
// Vamos a usar estos tests para probar si nuestro código funciona bien.

var assert = require('assert');

// Mínimo
var minValue = min(array);
assert.equal(minValue, 1, 'Minimo no coincide');

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

// Maximo valor
var maxValue = max(array);
assert.equal(maxValue, 99, 'Maximo no coincide');

// Total
var totalValue = total(array);
assert.equal(totalValue, 4850, 'Total no coincide');

// Promedio
var avgValue = promedio(array);
assert.equal(avgValue, 48.50, 'Avg no coincide');

// Desviacion Standart
var stdValue = promedio(array);
assert.ok((stdValue - 26.392233706149238) < 0,1, 'Std Deviation no coincide');

// Variance
var stdValue = promedio(array);
assert.Ok((stdValue - 696.55) < 0.1, 'Variance Deviation no coincide');
*/


//===== #2 STACK IMPLEMENTATION USING LINKED LISTS =====

// Implement a stack using linked lists

function Node(data) {
  this.data = data;
  this.next = null;
};

function Stack() {
  this._length = 0;
  this.head = null;
}

// (1) insert(value): Insert the value at the end of the Stack

Stack.prototype.insert = function(value) {
  var node = new Node(value);
  if(this.head == null) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  console.log("This: " + this);
  this._length ++;
  return this;
}

/* ==> CONSOLE LOG
> var a = new Stack()
undefined
> a
Stack { _length: 0, head: null }
> a.insert(1)
Stack { _length: 0, head: Node { data: 1, next: null } }
> a
Stack { _length: 0, head: Node { data: 1, next: null } }
> a.insert(0)
Stack {
  _length: 0,
  head: Node { data: 0, next: Node { data: 1, next: null } } }
> a
Stack {
  _length: 0,
  head: Node { data: 0, next: Node { data: 1, next: null } } }
>
*/

// (2) pop(): Get the last item (the head) from the stack
Stack.prototype.pop = function () {
  aux = this.head;
  this.head = this.head.next;
  this._length --;
  return aux.data
};

// (3) getAll(): List all the elements on the list
Stack.prototype.getAll = function () {
  var arrayOfNodes = [];
  while (this.head != null) {
    arrayOfNodes.push(this.pop());
  }
  return arrayOfNodes;
};

// (4) len(): Return the number (length) of elements in the stack

// (5) Use the Stack to inverse an array

function invertir(array) {
  var pila = new Stack();
  for(var i = 0; i < array.length; i ++ ) {
    pila.insert(array[i]);
  }
  return pila.getAll();
}


/* STACK TESTS

var stack = new Pila();

stack.insert(1);
assert.equal(stack.pop(), 1, 'No funciona Pop');
assert.equal(stack.len(), 0, 'No cuenta bien los elementos');

stack.insert(1);
stack.insert(2);
stack.insert(3);
assert.equal(stack.len(), 3, 'No cuenta bien los elementos');

var array = [1, 2, 3, 4];

inversedArray = invertir(array);
assert.deepEqual(inversedArray, [ 4, 3, 2, 1 ], 'No invierte bien.');
*/


//====== #3 QUEUE WITH LINKED LISTS AND DOUBLE LINKED LISTS ===== (Queue is a special case of a list) (list is like a tree with one branch)

// Implement a Queue Class

function Node(data) {
  this.data = data;
  this.next = null;
};

function Queue() {
  this._length = 0;
  this.head = null;
}


// (1) getAll() : Show all the elements on the list

// (2) get(index): Lista el enésimo elemento de la lista. Any number

// (3) insert(value): Insertar un nodo al comienzo de la lista.

Queue.prototype.insert = function(value) {
  var node = new Node(value);
  if(this.head == null) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  console.log("This: " + this);
  this._length ++;
  return this;
}
//EXAMPLE(http://thatjsdude.com/interview/linkedList.html#deleteNodeSLL)
LinkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;
    }
    else{
      var current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }


// (4) get(): Sacar un nodo del comienzo de la lista. (case -1: your targeted node is in the head. you have to replace the head with the next node)
Queue.prototype.removeHead = function(val){
    var current = this.head;
    if(current.data == val){
       this.head = current.next;
    }
    else{
      var previous = current;
    }
}

// (5) pop(): Sacar un nodo del final de la lista. (case -2: your targeted node is in the tail. you just have to remove it from the tail. Hence next of the node before the tail will be null.)
Queue.prototype.removeTail = function(val){
    var current = this.head;
    if(current.data == val){
        previous.next == null;
      }
}

// (6)find(value): Buscar un nodo con valor value, si existe lo devuelve, si no existe devuelve null. (case-3: your targeted node is in the middle of the LinkedList, you have to make the node after your targeted node to be the next node of the node before your targeted node.)

//??? To make some previous var, doesn't this make it double linked
Queue.prototype.removeValue = function(val){ //*** Needs evaluation that you have at least two nodes
    var current = this.head;
    while (current.next == null) {
      var previous = current; //using this to evaluate
      if(current.data == val){ // val passed in, the values you are comparing val and data in Node
            previous.next = current.next;
            break;
          }
          previous = current;
          current = current.next;
        }
    }
}

Queue.prototype.findValue = function(val){
  var i= 0
  current = this.head;
  while (i < this._length) {
    if (current.data == val) {
      return current.data;
    }
  current = current.next
  i++
  }
  return null // returns this if value (val) you were looking for was not found
}


// ===============

// Implementing Double Linked Lists

function Node(data) {
  this.data = data;
  this.previous = null;
  this.next = null;
};

function DoublyLinkedList() {
  this._length = 0;
  this.head = null;
  this.tail = null;
}

DoublyLinkedList.prototype.insert = function(value) {
  var node = new Node(value);
  if(this.head == null) {
    this.head = node;
    this.tail = node;
  } else {
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this._length ++;
  return this;
}

DoublyLinkedList.prototype.getAll = function() { // traverse through list
  var current = this.head;
  while(current != null) {
    console.log(current);
    current = current.next;
  }
};

DoublyLinkedList.prototype.getAll = function() { // traverse through list another way of doing it
  var i = 0;
  var current = this.head;
  while(i < this._length) {
    console.log(current);
    i ++;
  }
};

DoublyLinkedList.prototype.getN = function(n) { // get random given value

};

DoublyLinkedList.prototype.removeAtHead = function() { // get() Remove from head of list
  var current = this.head;
  var toReturn = null;

  if (current !== null) {
      toReturn = this.head.data;

      if (current === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.prev = null;
      }
  }
  return toReturn;
};

// ======= BINARY TREES =========

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
};

/*
Árbol binario

Implementar un árbol binario que realice las sigiuentes operaciones:
Insertar un elemento.
Borrar un elemento.
Buscar un elemento.
*/

/*
Modificar el ejercicio anterior para que ahora sea una lista doblemente enlazada que tenga las mismas operaciones:
getAll(): Listar todos los elementos de la lista.
getN(n): Listar el enésimo elemento de la lista.
insert(value): Insertar un nodo al comienzo de la lista.
get(): Sacar un nodo del comienzo de la lista.
pop(): Sacar un nodo del final de la lista.
find(value): Buscar un elemento de la lista por el dato.
next(): Avanza el puntero a la siguiente posición.
past(): Retrocede el puntero a la posición anterior.
*/

/*
Implementar una clase Lista que tenga las siguientes operaciones:
getAll() : Muestra todos los elementos de la lista.
get(index): Lista el enésimo elemento de la lista.
insert(value): Insertar un nodo al comienzo de la lista.
get(): Sacar un nodo del comienzo de la lista.
pop(): Sacar un nodo del final de la lista.
find(value): Buscar un nodo con valor value, si existe lo devuelve, si no existe devuelve null.
*/

/* QUEUE (SINGLE LINKED & DOUBLE LINKED LISTS) TESTS

var lista = new Lista();

lista.insert(1);
lista.insert(2);
lista.insert(3);
lista.insert(4);

lista.getAll() // 1, 2, 3, 4

assert.equal(lista.get(0), 1, 'No encontró el primer elemento');
assert.equal(lista.get(3), 4, 'No encontró el ultimo elemento');

assert.equal(lista.get(), 1, 'No sacó bien el primero');

assert.equal(lista.pop(), 4, 'No sacó bien el último');

assert.equal(lista.find(2), 2, 'No busca bien');
assert.equal(lista.find(4), null, 'No busca bien');
*/
