/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */
export function calculateGrade(score, hasExtraCredit) {
  if(score < 0 || score > 100) return "INVALID";
    if(hasExtraCredit){
        score += 5
    }
    if(score > 100) score = 100;
  let totalScore = ""
  if(score <= 59) totalScore = "F";
  else if(score >= 60 && score <= 69 ) totalScore = "D";
  else if(score >= 70 && score <= 79 ) totalScore = "C";
  else if(score >= 80 && score <= 89 ) totalScore = "B";
  else if(score >= 90 && score <= 100 ) totalScore = "A";

  return totalScore

    //more clean code
    /*if (score < 0 || score > 100) return "INVALID";

    // 2. Adjust Score (using Math.min for a cleaner cap)
    let finalScore = hasExtraCredit ? Math.min(score + 5, 100) : score;

    // 3. Simplified Grade Logic (High to Low)
    if (finalScore >= 90) return "A";
    if (finalScore >= 80) return "B";
    if (finalScore >= 70) return "C";
    if (finalScore >= 60) return "D";

    return "F";*/

}
