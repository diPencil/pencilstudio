const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, '..', 'public', 'logodark.png');
const file2 = path.join(__dirname, '..', 'public', 'logowhite.png');

try {
  const stat1 = fs.statSync(file1);
  const stat2 = fs.statSync(file2);
  console.log('logodark.png size:', stat1.size);
  console.log('logowhite.png size:', stat2.size);

  const buf1 = fs.readFileSync(file1);
  const buf2 = fs.readFileSync(file2);

  if (buf1.equals(buf2)) {
    console.log('Files are identical!');
  } else {
    console.log('Files are different.');
  }
} catch (e) {
  console.error(e);
}
