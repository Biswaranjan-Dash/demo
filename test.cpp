#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric> // for accumulate

using namespace std;

// Function to perform the operation described in the problem
int max_value(vector<int>& B) {
    while (B.size() > 1) {
        int max_val = *max_element(B.begin(), B.end());
        int min_val = *min_element(B.begin(), B.end());
        int mid_val = accumulate(B.begin(), B.end(), 0) - max_val - min_val;
        B.erase(remove(B.begin(), B.end(), max_val), B.end());
        B.erase(remove(B.begin(), B.end(), min_val), B.end());
        B.push_back(mid_val);
    }
    return B[0];
}

// Function to process each test case
vector<int> process_test_case(int N, int Q, vector<int>& A, vector<int>& queries) {
    vector<int> results;
    for (int K : queries) {
        results.push_back(max_value(vector<int>(A.begin(), A.begin() + K)));
    }
    return results;
}

int main() {
    int T;
    cin >> T;  // Number of test cases
    if (T <= 0) {
        cerr << "Invalid number of test cases.";
        return 1;
    }
    for (int t = 0; t < T; ++t) {
        int N, Q;
        cin >> N >> Q;  // Length of array and number of queries
        if (N <= 0 || Q <= 0) {
            cerr << "Invalid input for length of array or number of queries.";
            return 1;
        }
        vector<int> A(N);
        for (int i = 0; i < N; ++i) {
            cin >> A[i];  // Array A
        }
        vector<int> queries(Q);
        for (int i = 0; i < Q; ++i) {
            cin >> queries[i];  // Queries
            if (queries[i] <= 0) {
                cerr << "Invalid query value.";
                return 1;
            }
        }
        // Process the test case and print the results
        vector<int> results = process_test_case(N, Q, A, queries);
        for (int i = 0; i < Q; ++i) {
            cout << results[i] << " ";
        }
        cout << endl;
    }
    return 0;
}
