/**
 * Controller for processing BFHL API requests
 */

// Personal information
const USER_INFO = {
  full_name: "john_doe",
  dob: "17091999",
  email: "john@xyz.com",
  roll_number: "ABCD123"
};

/**
 * Process data from request and return formatted response
 */
const processData = (req, res) => {
  try {
    const { data } = req.body;

    // Validate input
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input. 'data' must be an array."
      });
    }

    // Initialize arrays for categorizing data
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    
    // Process each item in the data array
    data.forEach(item => {
      const stringItem = String(item);
      
      // Check if item is a number
      if (/^\d+$/.test(stringItem)) {
        const num = parseInt(stringItem);
        if (num % 2 === 0) {
          evenNumbers.push(stringItem);
        } else {
          oddNumbers.push(stringItem);
        }
      } 
      // Check if item is an alphabet (single character or a string of alphabets)
      else if (/^[a-zA-Z]+$/.test(stringItem)) {
        alphabets.push(stringItem.toUpperCase());
      } 
      // If not a number or alphabet, consider it a special character
      else {
        // Check if the item contains special characters
        const specialChars = stringItem.match(/[^a-zA-Z0-9]/g);
        if (specialChars) {
          specialCharacters.push(...specialChars);
        }
      }
    });

    // Calculate sum of numbers
    const sum = [...oddNumbers, ...evenNumbers].reduce((acc, curr) => acc + parseInt(curr), 0).toString();

    // Create concatenated string with reversed alphabets in alternating caps
    let concatString = '';
    if (alphabets.length > 0) {
      // Concatenate all alphabets
      const allAlphabets = alphabets.join('');
      
      // Reverse the string
      const reversedString = allAlphabets.split('').reverse().join('');
      
      // Apply alternating caps
      concatString = reversedString.split('').map((char, index) => 
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      ).join('');
    }

    // Create user_id in the format: full_name_ddmmyyyy
    const user_id = `${USER_INFO.full_name}_${USER_INFO.dob}`;

    // Prepare and send the response
    return res.status(200).json({
      is_success: true,
      user_id: user_id,
      email: USER_INFO.email,
      roll_number: USER_INFO.roll_number,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: sum,
      concat_string: concatString
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({
      is_success: false,
      message: "Internal server error"
    });
  }
};

module.exports = {
  processData
};
