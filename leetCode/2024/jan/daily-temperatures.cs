//https://leetcode.com/problems/daily-temperatures/?envType=daily-question&envId=2024-01-31
public class Solution
{
    public int[] DailyTemperatures(int[] temperatures)
    {
        int n = temperatures.Length;
        var res = new int[n];

        for (int i = n - 1; i >= 0; i--)
        {
            if (i == n - 1) res[i] = 0;
            else
            {
                if (temperatures[i] < temperatures[i + 1]) res[i] = 1; // next day
                else if (temperatures[i] == temperatures[i + 1]) res[i] = res[i + 1] == 0 ? 0 : res[i + 1] + 1;
                else
                {
                    int j = i + 1;
                    // find next warmer day, or the end, or the warmest day (res[i] == 0)
                    while (j < n && res[j] != 0 && temperatures[j] <= temperatures[i]) j += res[j];
                    if (j == n || temperatures[j] <= temperatures[i]) res[i] = 0;
                    else res[i] = j - i;
                }
            }
        }

        return res;
    }
}