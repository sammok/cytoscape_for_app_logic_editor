
$(function (){
    var newAppLogic = {
        'elements': {
            "nodes":[{"data":{"id":"a01","desc":"智能咖啡壶","type":"app"},"position":{"x":50,"y":173.25},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"app"}]
        }
    };

    //var relationShipChain = getRelationship(nodeArr);

    function getRelationship (nodeArr){
        var dataChain = [];

        for (var i=0; i < nodeArr.length; i++) {
            if (nodeArr[i].target) {
                // create target
                var targetAmount = nodeArr[i].target.length;
                if (targetAmount>0){
                    for (var j=0; j<targetAmount; j++) {
                        var associatedData = {data: {}};
                        associatedData.data.source = nodeArr[i].data['id'];
                        associatedData.data.target = nodeArr[i].target[j];
                        dataChain.push(associatedData);
                    }
                }
            }
        }

        return dataChain;
    }

    // Init
    var currentNode = null;

    $('#cy').cytoscape({
        style: cytoscape.stylesheet()
            .selector('node').css({
                "width": '78px',
                "height": '78px',
                'content': 'data(desc)',
                'color': '#999999',
                'font-size': '12px',
                'text-halign': 'center',
                'text-valign': 'bottom'
            })
            .selector(':selected').css({
                'background-color': 'black',
                'line-color': 'black',
                'target-arrow-color': 'black',
                'source-arrow-color': 'black',
                'opacity': 1
            })
            .selector('edge').css({
                'target-arrow-shape': 'circle',
                'target-arrow-color': '#1aa9eb',
                'line-color': '#1aa9eb',
                'line-style': 'dashed',
                'width': '1px'
            })
            .selector('.app').css({
                "background-color": '#fff',
                'border-width': 1,
                'border-color': '#1aa9eb',
                'border-style': 'solid',
                'background-image': 'build/images/cytoscape-icon-app.png'
            })
            .selector('.action').css({
                "background-color": '#fff',
                'border-width': 1,
                'border-color': '#23c3aa',
                'border-style': 'solid',
                'background-image': 'build/images/cytoscape-icon-action.png'
            })
            .selector('.service').css({
                "background-color": '#fff',
                'border-width': 1,
                'border-color': '#ffc90f',
                'border-style': 'solid',
                'background-image': 'build/images/cytoscape-icon-service.png'
            })
            .selector('.root').css({
                "width": '98px',
                "height": '98px',
                "font-size": "16px",
                'background-image': 'none',
                'text-valign': 'center'
            })
            .selector('.cur').css({
                "background-color": 'lightyellow',
                'color': '#333'
            }),
        //elements:
        //    {
        //        nodes:dataForAiCoffeeMachine.elements.nodes,
        //        edges:dataForAiCoffeeMachine.elements.edges
        //    },
//        {
//            nodes: datas.elements.nodes,
//            edges: datas.elements.edges
//        },
        layout: {
            name: 'preset',
            directed: true,
            padding: 10
        },
        ready: function (){
            console.log('Ready to render..');
            //----------------------------------------------------
            window.cy = this;
            cy.load(newAppLogic.elements);

            var appController = {
                config: function (){
                    // lock nodes
                    cy.zoomingEnabled( false );
                },
                editNode: function (){
                    var curNode = null,
                        focusedNode = null;

                    // set current node
                    cy.on('tap', 'node', setCurNode);

                    // modify node
                    $('#modifyNode').bind('click', modifyNode);

                    // remove node
                    $('#removeNode').bind('click', removeNode);

                    // add node
                    $('#add_btn').bind('click', addNode);

                    function setCurNode (){
                        var node = this;

                        console.log(this.id());
                        // set cur
                        if (curNode){
                            curNode.removeClass('cur');
                        }
                        curNode = node;
                        node.addClass('cur');
                    }

                    function addNode(){
                        var type = $('#add_type').val(),
                            description = $('#add_description').val();

                        console.log( 'Detail for new node: ', type, description );

                        // check node detail
                        if (type && type != 'none' && description) {
                            var parent = curNode;

                            // if choose parent node
                            if (parent) {
                                // add new node;
                                var node = {
                                        group: "nodes",
                                        data:{
                                            id: 'a' + new Date().getTime(),
                                            desc: description,
                                            type: $('#add_type').val()
                                        },
                                        classes:type
                                    },
                                    edge = {
                                        group: "edges",
                                        data: {
                                            // plus 1 avoid same time with above node getTime();
                                            id: 'a' + new Date().getTime()+1,
                                            source: node.data.id,
                                            target: parent.id()
                                        }
                                    };

                                setNodePosition();

                                var addedNode = cy.add(node);
                                var addedEdge = cy.add(edge);

                                cy.reset().center();

                                function setNodePosition (){
                                    // position.y value via check new node is has siblings, then calculator with sibling's position.y value;
                                    // get son edges
                                    var connectedEdges = curNode.connectedEdges(function(){
                                        return this.target().anySame( curNode );
                                    });

                                    // get son nodes
                                    var connectedNodes = connectedEdges.sources();
                                    console.log('son count before add:', connectedEdges.length);

                                    if ( connectedEdges.length >= 1 ) {
                                        console.log('has siblings');
                                        node.position = {
                                            x: parent.position().x + (100 + 60),
                                            y: connectedNodes[connectedNodes.length-1].position().y + 160
                                        }

                                    } else {
                                        // if not have siblings node, just keep
                                        node.position = {
                                            x: parent.position().x + (100 + 60),
                                            y: parent.position().y
                                        }
                                    }
                                }
                            } else {
                                alert('Please choose a parent node who you want to insert node to.');
                            }
                        } else {
                            alert('Please select node type and write description for node.');
                        }
                    }

                    function removeNode(){
                        var nodes = curNode;
                        if (nodes.hasClass('root')) {
                            alert('You can\'t remove root node');
                        } else {
                            nodes.remove();
                            curNode = null;
                        }
                    }

                    function modifyNode(){
                        var node = curNode;
                        if (node) {
                            var text = prompt('Modify node description', '');
                            node.data({'desc': text})
                        } else {
                            alert('No node are select before you edit.');
                        }
                    }
                },
                export: {
                    png: function (){
                        // return 'String'
                        return cy.png()
                    },
                    json: function (){
                        // return 'JSON String'
                        console.log('%c Data JSON below: ', 'color: green; font-size:16px;');
                        return JSON.stringify(cy.json());
                    }
                },
                init: function (){
                    // config cytoscape
                    this.config();

                    // init node edit
                    this.editNode();

                    // bind get remote data btn
                    $('#remoteData').click(function (){
                        $.ajax({
                            url: 'http://sammok.github.io/cytoscape_for_app_logic_editor/build/data/data.json',
                            success: function (response){
                                console.log('Success to get Data:', response);
                                cy.load(response.elements);
                            },
                            error: function (error) {
                                console.log('Fails to get data: ', error);
                            }
                        });
                    });

                    // bind getPng btn
                    $('#getPng').click(function (){
                        var png = cy.png();
                        png ? $('img').attr('src', png) : false;

                    });

                    // bind getJson btn
                    $('#getJson').click(function (){
                        console.log(appController.export.json());
                    });
                }
            };

            appController.init();
        }
    });

});