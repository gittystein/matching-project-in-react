export const f = (x) => {
  
    let d = new Date();
    if (d.getDate() == x.getDate()) {
        if (d.getHours() == x.getHours()) {
            return " לפני" + (x.getMinutes() - d.getMinutes()) + " דקות ";
        }
        return " לפני " + (x.getHours() - d.getHours()) + " שעות ";
    }
    return " לפני " + ( x.getDate() - d.getDate() )+ " ימים ";
   
} 

