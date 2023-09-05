
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

function paperwork(n, m) {
    if(n>0 && m>0){
      return (n*m)
    }
    else{
      return 0
    }
  }

//   https://www.codewars.com/kata/555a67db74814aa4ee0001b5

function testEven(n) {
    return( 
     n%2===0 ? true : false 
    )  
    }

//   https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function evenOrOdd (number){
    let integar=number;
    return(
    integar%2===0? "Even" : "Odd" )
    
  }

//https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
    findSmallestInt(args) {
   let smallest=args[0]
      
      args.forEach((item)=>{
        if(smallest>item){
          smallest=item
        }
           
      })
      return smallest
    }
  }

//  https://www.codewars.com/kata/570e8ec4127ad143660001fd
  function billboard(name, price = 30){
 
    let total=0;
    for(let i=0;i<name.length;i++){
      total=total+price
    }
   return total  
    
  } 

  //https://www.codewars.com/kata/57ab3c09bb994429df000a4a

  function twoHighest(arr) {
  if (arr.length===0)  return [] 
  
  if (arr.length===1){
  return arr
  }
  let largest=[]
  largest.unshift(largestFinder(arr))
  
  newarr=arr.filter((item)=>{
    // console.log(largest)
    return item<largest[0]
  })
  
  largest.unshift(largestFinder(newarr))

  return largest.reverse()
   
}

function largestFinder(arr){
    let largest=arr[0]
  for(let i=0;i<arr.length;i++){
    if(arr[i]>=largest)
    {
        largest=arr[i]
        
    }
    
     }
    
  // console.log(largest,typeof(largest))
  return largest
  
}

console.log(twoHighest([15, 20, 20, 17]))

// https://www.codewars.com/kata/55b42574ff091733d900002f
function friend(friends){

    newFriends=friends.filter((item)=>{
      return item.length===4
    }
      )
      
      return newFriends
      
    }
    
    console.log(friend(["Ryan", "Kieran", "Mark"]))


// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
    function findMultiples(integer, limit) {

        let list=[]
        for(let i=integer;i<=limit;i++){
            list.push(i)
            i=i+integer;
            i--
      
        }
        
        // return list.reverse()
        return list
    }


 // https://www.codewars.com/kata/5913152be0b295cf99000001 This question has been solved for test cases but on random test it failed !
    
const divisions = (n, divisor) => {
  
    count=0
    count=returnDivision(n,divisor)
    return count
      }
      
    const returnDivision=(n,divisor)=>{
      if(n>divisor){
        let val=Math.floor(n/divisor)
      count++
       
      if(val<divisor)
      {
        return count
      }
      else{
        
      return  returnDivision(val,divisor)
      
        
      }
    }
    else if (n==divisor){
      return 1
    }
    else{
      return 0
    }
      }
    
    console.log(divisions(6,6))
    console.log(divisions(100,2))
    console.log(divisions(2450,5))
    console.log(divisions(9999,3))
    console.log(divisions(2,3))
    console.log(divisions(5,5))
    console.log(divisions(21312231,4234))
    
// https://www.codewars.com/kata/54d1c59aba326343c80000e7

const solve = (x, y) => x/y

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str){
  strArr=str.split('')
   strArr.splice(0,1)
   strArr.splice(-1)
  return  strArr.join('')};
 
 
  // https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7
  
  function isOpposite(s1,s2){
    if(s1.length===s2.length && s1.length>0 && s2.length>0){
    for(let i=0;i<s1.length;i++){
     if( s1[i]===s2[i] ){
        return false
        break;
     }  
    }
    return true;
  }
  
  else{
    return false
  }
    
  }

  // https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
  function persistence(num) {
    count=0;
    return persistency(num)   
}
    
    function persistency(num){
      
    if(num.toString().length>1){
      
        numArr=num.toString().split('')
        val=numArr.reduce((accum,curr)=> accum*curr ) 
    
        count++
       if(val.toString().length !== 1 ){  
        return persistency(val) }
      else {
       return count    
      }
     
     
    }
    else {return 0}
    
    }

    // https://www.codewars.com/kata/5868812b15f0057e05000001
    function tailSwap(arr){
      resultArr=[]
      return tailSwaps(arr)  
      }
      function tailSwaps(arr) {
         let arr1=[]
        arr.forEach((item,i)=>{
          
          // console.log(item.split(':')[0])
              // console.log(item.split(':')[1])
              arr1.push(item.split(':')[0])
              arr1.push(item.split(':')[1])
        })
        resultArr.push(arr1[0]+":"+arr1[3])
        resultArr.push(arr1[2]+":"+arr1[1])
        return resultArr
      }


// https://www.codewars.com/kata/62c93765cef6f10030dfa92b

function solution(start, finish,step=0) 
{ 
  
    while(start!=finish){
    if((start+3)>finish)
  {
      start=start+1;
      step++
  }else{
      start=start+3
      step++
}


}
return step
}


console.log(solution(1,5))