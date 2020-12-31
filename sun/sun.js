window.addEventListener('mousemove', (e) => {
    let percentage = (100 - e.clientX / window.innerWidth * 100)
    document.querySelector('.moon').style.clipPath = `inset(0px ${percentage}% 0px 0px)`
  })