const counters = document.querySelectorAll('.percentage'),
    lines = document.querySelectorAll('.progress');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});