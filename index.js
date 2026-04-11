var findMedianSortedArrays = function(nums1, nums2) {
    let A = nums1;
    let B = nums2;
    const total = A.length + B.length;
    const half = Math.floor(total / 2);

    // Always binary search on the smaller array for O(log(min(m, n)))
    if (B.length < A.length) {
        [A, B] = [B, A];
    }

    let l = 0;
    let r = A.length - 1;

    while (true) {
        // Partition index for A
        let i = Math.floor((l + r) / 2); 
        // Partition index for B (derived from A's partition)
        let j = half - i - 2;

        // Boundary values (handle out of bounds with Infinity)
        let Aleft = i >= 0 ? A[i] : -Infinity;
        let Aright = (i + 1) < A.length ? A[i + 1] : Infinity;
        let Bleft = j >= 0 ? B[j] : -Infinity;
        let Bright = (j + 1) < B.length ? B[j + 1] : Infinity;

        // Check if partition is correct
        if (Aleft <= Bright && Bleft <= Aright) {
            // Odd total: Median is the minimum of the right side
            if (total % 2 !== 0) {
                return Math.min(Aright, Bright);
            }
            // Even total: Median is average of max(left) and min(right)
            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
        } 
        else if (Aleft > Bright) {
            r = i - 1; // A's left side is too big, move left
        } 
        else {
            l = i + 1; // A's left side is too small, move right
        }
    }
};