function QuickSelect(arr,k){
    function select(low, high){
        pivot =partition(low, high)
        if (k<pivot){
            return(select(low,pivot-1))
        }
        if(k>pivot){
            return(select(pivot+1,high))
        }
        return arr[k]
    }
    function partition(low,high){
        p = low
        for( i in range(low,high)){
            if (arr[i] < arr[high])
                {arr[i], arr[p] = arr[p], arr[i]
                p += 1}}
        arr[p], arr[high] = arr[high], arr[p]
        return p
        
    }
    return select(0, length.arr-1)
}

export default function QuickSelect()