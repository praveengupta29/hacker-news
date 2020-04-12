/**
 *
 * A Utility to store Key Pair value in localStorage
 */

export class LocalStorageUtil {
  constructor() {
    this.storage = {};
    if (isStorageUsable()) {
      this.storage = window.localStorage;
    }
  }

  /**
   *
   * @param {string} - Key name
   * @description - Get Value from localStorage
   */
  getItem = key => {
    return isStorageUsable() && typeof this.storage !== 'undefined'
      ? this.storage.getItem(key)
      : '';
  };

  /**
   *
   * @param { string } key - Key Name
   * @param { string } value - Key Value
   * @description - Save Value against key into localStorage
   */
  saveItem = (key, value) => {
    // eslint-disable-next-line no-unused-expressions
    isStorageUsable() && this.storage.setItem(key, value);
  };

  /**
   *
   * @param { string } name Key Name
   * @description - Remove `Key Value Pair` from localStorage
   */
  removeItem = key => {
    // eslint-disable-next-line no-unused-expressions
    isStorageUsable() && this.storage.removeItem(key);
  };

  /**
   *
   * @param { string } key - Key Name
   * @param { string } value - Key Value
   * @description - Saves Value in Array against key into localStorage
   */
  saveItemInArray = (key, value) => {
    const feedIds = JSON.parse(this.getItem(key) || '[]');
    feedIds.push(value);
    this.saveItem(key, JSON.stringify(feedIds));
  };
}

/**
 *
 * @description - Checks is local storage available or not
 */
export const isStorageUsable = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  const storage = window.localStorage;
  try {
    storage.setItem('testkey', 'test');
    storage.removeItem('testkey');
  } catch (e) {
    if (e.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {
      return false;
    }
  }
  return true;
};
