<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sales Associate Application</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #1e1e1e;
      margin: 0;
      padding: 20px;
    }

    .container {
      max-width: 800px;
      margin: auto;
      background-color: #fff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }

    h2 {
      text-align: center;
      color: #333;
    }

    fieldset {
      border: none;
      margin-bottom: 20px;
    }

    legend {
      font-weight: bold;
      margin-bottom: 10px;
      color: #444;
    }

    label {
      display: block;
      margin-bottom: 10px;
      color: #555;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="date"],
    textarea,
    select {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .option-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 8px;
    }

    .option-group label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0;
    }

    button {
      background-color: #0078d4;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      width: 100%;
    }

    button:hover {
      background-color: #005fa3;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Seasonal Part-Time Sales Associate Application</h2>
    <form action="/submit-application" method="POST">
      <fieldset>
        <legend>Personal Information</legend>
        <label>Full Name:<input type="text" name="full_name" required></label>
        <label>Phone Number:<input type="tel" name="phone" required></label>
        <label>Email Address:<input type="email" name="email" required></label>
        <label>Current Address:<textarea name="address" rows="2" required></textarea></label>
        <div class="option-group">
          <legend>Authorized to work in the U.S.?</legend>
          <label><input type="radio" name="authorized" value="Yes" required> Yes</label>
          <label><input type="radio" name="authorized" value="No"> No</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Education</legend>
        <label>Highest Level Completed:
          <select name="education_level" required>
            <option value="">--Select--</option>
            <option>High School Diploma</option>
            <option>GED</option>
            <option>Associate Degree</option>
            <option>Bachelor’s Degree</option>
            <option>Other</option>
          </select>
        </label>
        <label>School Name:<input type="text" name="school_name" required></label>
        <label>Graduation Year:<input type="text" name="grad_year" required></label>
      </fieldset>

      <fieldset>
        <legend>Availability</legend>
        <div class="option-group">
          <legend>Available 20–25 hours/week?</legend>
          <label><input type="radio" name="availability" value="Yes" required> Yes</label>
          <label><input type="radio" name="availability" value="No"> No</label>
        </div>
        <div class="option-group">
          <legend>Preferred Schedule:</legend>
          <label><input type="checkbox" name="schedule[]" value="Weekdays"> Weekdays</label>
          <label><input type="checkbox" name="schedule[]" value="Weekends"> Weekends</label>
          <label><input type="checkbox" name="schedule[]" value="Evenings"> Evenings</label>
          <label><input type="checkbox" name="schedule[]" value="Flexible"> Flexible</label>
        </div>
        <div class="option-group">
          <legend>Seasonal Availability:</legend>
          <label><input type="checkbox" name="seasonal[]" value="Thanksgiving"> Thanksgiving</label>
          <label><input type="checkbox" name="seasonal[]" value="Black Friday Weekend"> Black Friday Weekend</label>
          <label><input type="checkbox" name="seasonal[]" value="December Holidays"> December Holidays</label>
          <label><input type="checkbox" name="seasonal[]" value="New Year’s Week"> New Year’s Week</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Sales Experience</legend>
        <div class="option-group">
          <legend>Previous Sales Experience?</legend>
          <label><input type="radio" name="sales_experience" value="Yes" required> Yes</label>
          <label><input type="radio" name="sales_experience" value="No"> No</label>
        </div>
        <label>If yes, describe:<textarea name="experience_details" rows="4"></textarea></label>
      </fieldset>

      <fieldset>
        <legend>References</legend>
        <label>Reference Name:<input type="text" name="ref_name" required></label>
        <label>Relationship:<input type="text" name="ref_relationship" required></label>
        <label>Phone Number:<input type="tel" name="ref_phone" required></label>
        <label>Email Address:<input type="email" name="ref_email" required></label>
      </fieldset>

      <fieldset>
        <legend>Signature</legend>
        <label>Typed Signature:<input type="text" name="signature" required></label>
        <label>Date:<input type="date" name="date" required></label>
      </fieldset>

      <button type="submit">Submit Application</button>
    </form>
  </div>
</body>
</html>
