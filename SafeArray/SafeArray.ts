class Safearray
{
    arr:number[]=[];
    size:number=5;
    failed_arr:number[]=[];
    failed_count:number=0;
    putElement(index:number,value:number)
    {
        if(index<0 || index>=this.size)
        {
            this.failed_count++;
            this.failed_arr.push(index);
            //console.log(`Not a valid index: ${this.failed_count} failed attempts at ${this.failed_arr}` );
            console.log("Not a valid index",this.failed_count," Failed attempts, index are ",this.failed_arr);

        }
        else
        this.arr[index]=value;

    }
    getElement(index:number)
    {
        if(index<0 || index>=this.size)
        {

            this.failed_count++;
            this.failed_arr.push(index);
            //console.log(`Not a valid index: ${this.failed_count} failed attempts at ${this.failed_arr}` );
            console.log("Not a valid index",this.failed_count," Failed attempts, index are ",this.failed_arr);
            return -1;
        }
        else
        return this.arr[index];

    }

}
let obj=new Safearray();
obj.putElement(3,20);
console.log(obj.getElement(3));


obj.putElement(27,20);
obj.putElement(30,10);

obj.getElement(40);