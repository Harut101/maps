
export function tripDuration (start, end) {
    let startTime = new Date(start);
    let endTime = new Date(end);
    let duration = new Date(endTime - startTime);
    return `${duration.getUTCHours()}:${duration.getUTCMinutes()}:${duration.getSeconds()}`
}


export function calculateRadius(duration){
    let maxRadius = 25;
    let minRadius = 10;
    
    if((duration / 10) >= maxRadius){
      return maxRadius;

    } else if((duration / 10) <= minRadius){
      return minRadius;
    }
    return duration / 10;
  }