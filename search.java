import org.w3c.dom.ls.LSOutput;

public class search {
    public static void main(String[] args) {
     int[] arr={12,16,78,28,19,5,24,7,823,};
     int target=19;
     System.out.println(search(arr,target));
    }
    static int search(int[] arr,int target){
        for(int i=0;i< arr.length;i++){
            if(arr[i]==target){
                return 1;
            }
            return -1;
        }
      return 1;
    }
}
