FN.block.type = {}

FN.block.type[ "box0" ] = ( blockName ) => {

  FN.block.cleanBox( "box2" )
  FN.block.cleanBox( "box3" )
  FN.block.cleanBox( "box4" )

  DATA.box0Selected = blockName
  DATA.box1Selected = 0
  DATA.box2Selected = 0
  DATA.box3Selected = 0
  DATA.box4Selected = 0
  
  let slot = FN.tab.getSlot()

  DATA.slots[ slot ].box0Selected = blockName // project state
  DATA.slots[ slot ].box1Selected = 0
  DATA.slots[ slot ].box2Selected = 0
  DATA.slots[ slot ].box3Selected = 0
  DATA.slots[ slot ].box4Selected = 0

  DATA.lastBoxSelected = "files"

  FN.block.selectedName( blockName )

  DATA[ "box1" ] = DATA.project.plurality.p0[ blockName ]

  FN.block.append( "box1" )
}



FN.block.type[ "box1" ] = ( blockName ) => {

  FN.block.cleanBox( "box3" )
  FN.block.cleanBox( "box4" )

  DATA.box1Selected = blockName
  DATA.box2Selected = 0
  DATA.box3Selected = 0
  DATA.box4Selected = 0
  
  let slot = FN.tab.getSlot()

  DATA.slots[ slot ].box1Selected = blockName
  DATA.slots[ slot ].box2Selected = 0
  DATA.slots[ slot ].box3Selected = 0
  DATA.slots[ slot ].box4Selected = 0

  DATA.lastBoxSelected = "p0"

  DATA[ "box2" ] = DATA.project.plurality.p1[ blockName ]

  FN.block.append( "box2" )

  log("box1")
}

FN.block.type[ "box2" ] = ( blockName ) => {

  FN.block.cleanBox( "box4" )

  DATA.box2Selected = blockName
  DATA.box3Selected = 0
  DATA.box4Selected = 0
  
  let slot = FN.tab.getSlot()

  DATA.slots[ slot ].box2Selected = blockName
  DATA.slots[ slot ].box3Selected = 0
  DATA.slots[ slot ].box4Selected = 0

  DATA.lastBoxSelected = "p1"

  DATA[ "box3" ] = DATA.project.plurality.p2[ blockName ]

  FN.block.append( "box3" )

  log("box2")
}

FN.block.type[ "box3" ] = ( blockName ) => {

  DATA.box3Selected = blockName
  DATA.box4Selected = 0
  
  let slot = FN.tab.getSlot()

  DATA.slots[ slot ].box3Selected = blockName
  DATA.slots[ slot ].box4Selected = 0

  DATA.lastBoxSelected = "p2"

  DATA[ "box4" ] = DATA.project.plurality.p3[ blockName ]

  FN.block.append( "box4" )

  log("box3")
}

FN.block.type[ "box4" ] = ( blockName ) => {

  DATA.box4Selected = blockName
  DATA.slots[ FN.tab.getSlot() ].box4Selected = blockName

  DATA.lastBoxSelected = "p3"

  log("box4")
}
