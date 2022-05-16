/* 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 */
document.addEventListener('DOMContentLoaded', function () {
  var rightcard = false
  var tempblock
  var tempblock2
  // document.getElementById('blocklist').innerHTML =
  //   '<div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"><div class="grabme"><span class="svg-icon-img"></span></div><div class="blockin">                  <div class="blockico"><span></span><span class="svg-icon-img"></span></div><div class="blocktext">                        <p class="blocktitle">New visitor</p><p class="blockdesc">Triggers when somebody visits a specified page</p>        </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme"><span class="svg-icon-img"></span></div><div class="blockin">                    <div class="blockico"><span></span><span class="svg-icon-img"></span></div><div class="blocktext">                        <p class="blocktitle">Action is performed</p><p class="blockdesc">Triggers when somebody performs a specified action</p></div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme"><span class="svg-icon-img"></span></div><div class="blockin">                    <div class="blockico"><span></span><span class="svg-icon-img"></span></div><div class="blocktext">                        <p class="blocktitle">Time has passed</p><p class="blockdesc">Triggers after a specified amount of time</p>          </div></div></div><div class="blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme"><span class="svg-icon-img"></span></div><div class="blockin">                    <div class="blockico"><span></span><span class="svg-icon-img"></span></div><div class="blocktext">                        <p class="blocktitle">Error prompt</p><p class="blockdesc">Triggers when a specified error happens</p>              </div></div></div>'

  flowy(document.getElementById('canvas'), drag, release, snapping)

  function addEventListenerMulti(type, listener, capture, selector) {
    var nodes = document.querySelectorAll(selector)
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener(type, listener, capture)
    }
  }

  function snapping(drag, first) {
    console.log('snapping:', drag, first)

    var grab = drag.querySelector('.grabme')
    grab.parentNode.removeChild(grab) // delete .grabme
    var blockin = drag.querySelector('.blockin')
    blockin.parentNode.removeChild(blockin) // delete .blockin

    if (drag.querySelector('.blockelemtype').value == '1') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>New visitor</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>When a <span>new visitor</span> goes to <span>Site 1</span></div>"
    } else if (drag.querySelector('.blockelemtype').value == '2') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>Action is performed</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Action 1</span> is performed</div>"
    } else if (drag.querySelector('.blockelemtype').value == '3') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>Time has passed</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>10 seconds</span> have passed</div>"
    } else if (drag.querySelector('.blockelemtype').value == '4') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>Error prompt</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Error 1</span> is triggered</div>"
    } else if (drag.querySelector('.blockelemtype').value == '5') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>New database entry</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>Add <span>Data object</span> to <span>Database 1</span></div>"
    } else if (drag.querySelector('.blockelemtype').value == '6') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>Update database</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>Update <span>Database 1</span></div>"
    } else if (drag.querySelector('.blockelemtype').value == '7') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>Perform an action</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>Perform <span>Action 1</span></div>"
    } else if (drag.querySelector('.blockelemtype').value == '8') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>Make a tweet</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>Tweet <span>Query 1</span> with the account <span>@alyssaxuu</span></div>"
    } else if (drag.querySelector('.blockelemtype').value == '9') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>Add new log entry</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>Add new <span>success</span> log entry</div>"
    } else if (drag.querySelector('.blockelemtype').value == '10') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>Update logs</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>Edit <span>Log Entry 1</span></div>"
    } else if (drag.querySelector('.blockelemtype').value == '11') {
      drag.innerHTML +=
        "<div class='blockyleft'><span class='svg-icon-img'></span><p class='blockyname'>Prompt an error</p></div><div class='blockyright'><span class='svg-icon-img'></span></div><div class='blockydiv'></div><div class='blockyinfo'>Trigger <span>Error 1</span></div>"
    }
    return true
  }

  function drag(block) {
    console.log('drag:', block)
    block.classList.add('blockdisabled')
    /* tempblock2：  */
    tempblock2 = block
  }

  function release() {
    console.log('release', tempblock2)
    if (tempblock2) {
      tempblock2.classList.remove('blockdisabled')
    }
  }

  /* 关闭配置项 */
  document.getElementById('close').addEventListener('click', function () {
    if (rightcard) {
      rightcard = false
      document.getElementById('properties').classList.remove('expanded')
      setTimeout(function () {
        document.getElementById('propwrap').classList.remove('itson')
      }, 300)
      tempblock.classList.remove('selectedblock')
    }
  })

  document.getElementById('removeblock').addEventListener('click', function () {
    flowy.deleteBlocks()
  })

  var aclick = false
  var noinfo = false
  var beginTouch = function (event) {
    aclick = true
    noinfo = false
    if (event.target.closest('.create-flowy')) {
      noinfo = true
    }
  }
  var checkTouch = function (event) {
    aclick = false
  }
  var doneTouch = function (event) {
    if (event.type === 'mouseup' && aclick && !noinfo) {
      if (
        !rightcard &&
        event.target.closest('.block') &&
        !event.target.closest('.block').classList.contains('dragging')
      ) {
        tempblock = event.target.closest('.block')
        rightcard = true
        document.getElementById('properties').classList.add('expanded')
        document.getElementById('propwrap').classList.add('itson')
        tempblock.classList.add('selectedblock')
      }
    }
  }
  addEventListener('mousedown', beginTouch, false)
  addEventListener('mousemove', checkTouch, false)
  addEventListener('mouseup', doneTouch, false)
  addEventListenerMulti('touchstart', beginTouch, false, '.block')
})