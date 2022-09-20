	 function mergeTwoLists(A, B){

			let tail = null;
			let h3 = new Node(-1);
			tail = h3;
			
			while(A !== null && B !== null) {
				if(A.data > B.data) { 
					tail.next = B;
					tail = tail.next;
					B = B.next;
				 }
				else { 
					tail.next = A;
					tail = tail.next;
					A = A.next;
				 }
				
			}

			if(A !== null) { tail.next = A }
			if(B !== null) { tail.next = B }
		    return h3.next;	
	}
 	
 



  function Node(data) {
    this.data = data;
    this.next = null;
 };
//[[3,null],[3,0],[3,null]]

//  1 -> 10 -> 20
//  4 -> 11 -> 13
//  3 -> 8 -> 9

 let head1 = new Node(1);

 head1.next = new Node(10);
 head1.next.next = new Node(20);

 let head2 = new Node(4);

 head2.next = new Node(11);
 head2.next.next = new Node(13);

 let head3 = new Node(3);

 head3.next = new Node(8);
 head3.next.next = new Node(9);


 	let current = null,

 	mergedList = [head1, head2, head3].reduce((curr, prev) => mergeTwoLists(curr, prev), 
 	current
 	)


 
