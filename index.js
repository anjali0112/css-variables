var variables=document.querySelectorAll("input");

function controls()
{
  const suffix=this.dataset.sizing || '';
  var a="--" + this.name;
  document.querySelector("img").style.setProperty(a, this.value + suffix);;
}
variables.forEach(input => input.addEventListener('change', controls));