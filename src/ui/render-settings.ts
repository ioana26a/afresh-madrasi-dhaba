export function loadRenderSettings(storage:Pick<Storage,'getItem'>|null):{scale:number;stats:boolean}{
  try {const saved=JSON.parse(storage?.getItem('madrasi-display')??'{}') as {version?:unknown;scale?:unknown;stats?:unknown};return{scale:typeof saved.scale==='number'&&Number.isFinite(saved.scale)?Math.round(Math.min(1,Math.max(.25,saved.scale))*4)/4:1,stats:saved.version===2&&saved.stats===true};}catch{return{scale:1,stats:false};}
}
export function saveRenderSettings(storage:Pick<Storage,'setItem'>|null,settings:{scale:number;stats:boolean}):void {try{storage?.setItem('madrasi-display',JSON.stringify({...settings,version:2}));}catch{/* Display controls still work when storage is unavailable. */}}
