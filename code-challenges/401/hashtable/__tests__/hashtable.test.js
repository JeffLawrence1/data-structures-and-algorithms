Hash(key){
  return key.split('').reduce((prev, curr) => {
    return prev + curr.charCodeAt(0);
  }, 0) * 599 % this.size;
}