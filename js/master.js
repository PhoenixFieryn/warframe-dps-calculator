function calculate() {
  let attackSpeed = parseFloat(document.getElementById('attackSpeed').value) || 1;
  let channelingDamage = parseFloat(document.getElementById('channelingDamage').value) || 1;
  let firingRate = parseFloat(document.getElementById('firingRate').value) || 1;
  let magazine = parseFloat(document.getElementById('magazine').value) || 1;
  let reload = parseFloat(document.getElementById('reload').value) || 1;
  let pellets = parseFloat(document.getElementById('pellets').value) || 1;
  let multishot = parseFloat(document.getElementById('multishot').value) || 1;
  let criticalChance = parseFloat(document.getElementById('criticalChance').value) || 1;
  let criticalMultiplier = parseFloat(document.getElementById('criticalMultiplier').value) || 1;
  let status = parseFloat(document.getElementById('status').value) || 1;
  let impact = parseFloat(document.getElementById('impact').value) || 0;
  let puncture = parseFloat(document.getElementById('puncture').value) || 0;
  let slash = parseFloat(document.getElementById('slash').value) || 0;
  let cold = parseFloat(document.getElementById('cold').value) || 0;
  let electricity = parseFloat(document.getElementById('electricity').value) || 0;
  let heat = parseFloat(document.getElementById('heat').value) || 0;
  let toxin = parseFloat(document.getElementById('toxin').value) || 0;
  let voidStatus = parseFloat(document.getElementById('voidStatus').value) || 0;
  let blast = parseFloat(document.getElementById('blast').value) || 0;
  let corrosive = parseFloat(document.getElementById('corrosive').value) || 0;
  let gas = parseFloat(document.getElementById('gas').value) || 0;
  let magnetic = parseFloat(document.getElementById('magnetic').value) || 0;
  let radiation = parseFloat(document.getElementById('radiation').value) || 0;
  let viral = parseFloat(document.getElementById('viral').value) || 0;

  let ips = impact + puncture + slash;
  let ped = cold + electricity + heat + toxin;
  let sed = blast + corrosive + gas + magnetic + radiation + viral;
  let criticalLevel = parseInt(criticalChance / 100) + 1;
  let effectiveCrit = criticalLevel * (criticalMultiplier - 1) + 1;
  let dpb = (ips + ped + sed) * effectiveCrit * multishot;

  let burstDamage = dpb * firingRate;
  let sustainedDamage = burstDamage * (magazine / firingRate) / (magazine / firingRate + reload);

  document.getElementById('maximumDPS').innerHTML = burstDamage;
  document.getElementById('sustainedDPS').innerHTML = sustainedDamage;
}
