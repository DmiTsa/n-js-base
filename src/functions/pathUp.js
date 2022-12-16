import { sep } from 'path';
import { access, constants } from 'node:fs/promises';

// const platform = process.platform;
// const pathSep = platform === 'win32' ? '\\' : '/';

async function pathUp(path) {
  try {
    await access(path, constants.F_OK);
    const pathSep = sep;
    let newPath = [];

    const pathParts = path.split(pathSep);

    newPath.push(pathParts[0]);

    pathParts.map((el, i) => {
      if (i > 0 && i < pathParts.length - 1) {
        newPath.push(el);
      }
    });

    if (newPath.length === 1) {
      return newPath.join(sep) + sep;
    } else {
      return newPath.join(sep);
    }
  } catch {
    console.error('Failed operation');
    return path;
  }
}

export default pathUp;
