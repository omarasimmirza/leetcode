/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let merged = new ListNode();
    let head = merged; 

    while (list1 && list2) {
        if (list1.val < list2.val) {
            merged.next = list1;
            list1 = list1.next;
        } else {
            merged.next = list2;
            list2 = list2.next;
        }
        merged = merged.next;
    }

    merged.next = list1 || list2; 

    return head.next; 
};



// var mergeTwoLists = function(list1, list2) {
//     let merged = new ListNode();
//     let head = new ListNode();
//     if(list1 == null && list2 == null)
//         merged = list1;
//     head = merged;
//     while(list1) {
//         if(list2 == null) {
//             while(list1) {
//                 let temp = new ListNode();
//                 merged.val = list1.val;
//                 list1 = list1.next;
//                 if(list1) {
//                     merged.next = temp;
//                     merged = temp;
//                 }
//             }
//             return head;
//         }
//         let newItem = new ListNode();
//         if(list1.val > list2.val) {
//             merged.val = list2.val;
//             list2 = list2.next;
//         }
//         else {
//             merged.val = list1.val;
//             list1 = list1.next;
//         }
//         if(list1 || list2) {
//             merged.next = newItem;
//             merged = newItem;
//         }
//     } while(list2) {
//         let newItem = new ListNode();
//         merged.val = list2.val;
//         list2 = list2.next;
//         if(list2) {
//             merged.next = newItem;
//             merged = newItem;
//         }
//     }
//     return head;
// };
// var mergeTwoLists = function(list1, list2) {
//     let merged = new ListNode();
//     let head = new ListNode();
//     head.next = merged;
//     // let merged = [];
//     let k = 0;
//     for(let i = 0; i < list1.length; i++) {    
//         if(k >= list2.length) {
//             // merged = merged.concat(list1.slice(i, list1.length));
//             for(; i < list1.length; i++) {
//                 let temp = new ListNode();
//                 merged.val = list1[i];
//                 merged.next = temp;
//                 merged = temp;
//             }
//             break;
//         }
//         let newItem = new ListNode();
//         if(list1[i] < list2[k]) {
//             // merged.push(list1[i]);
//             merged.val = list1[i];
//             merged.next = newItem;
//             merged = newItem;
//         }
//         else {
//             if(k < list2.length) {
//             //    merged.push(list2[k]);
//                 merged.val = list2[k];
//                 merged.next = newItem;
//                 merged = newItem;
//                 k++;
//             }
//             else
//                 break;
//         }
//     }
//     if(k < list2.length) {
//         // merged = merged.concat(list2.slice(k, list2.length));
//         for(; k < list2.length; k++) {
//             let newItem = new ListNode();
//             merged.val = list2[k];
//             merged.next = newItem;
//             merge = newItem;
//         }
//     }
//     return head;
// }
    // while(list1.next != null) {
    //     let newItem = new ListNode();
    //     if(list1.val > list2.val) {
    //         merged.val = list2.val;
    //         if (list2.next != null)
    //             list2 = list2.next;
    //         else
    //             break;
    //     }
    //     else {
    //         merged.val = list1.val;
    //         list1 = list1.next;
    //     }
    //     merged.next = newItem;
    // } while(list2.next != null) {
    //     let newItem = new ListNode();
    //     merged.val = list2.val;
    //     merged.next = newItem;
    //     list2 = list2.next;
    // }
    // return head;