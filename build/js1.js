
$(function (){
    var nodeArr = [
        {
            data: { id: 'a01', desc: '智能咖啡壶', type: 'app'},
            classes: 'app',
            target: ['a02']
        },
        {
            data: { id: 'a02', desc: '是否预定时间', type: 'action'},
            classes: 'action',
            target: ['a03', 'a04']
        },
        {
            data: { id: 'a03', desc: '手机', type: 'app'},
            classes: 'app'
        },
        {
            data: { id: 'a04', desc: '自动接通电源', type: 'action'},
            classes: 'action',
            target: ['a05']
        },
        {
            data: { id: 'a05', desc: '检测咖啡豆存量', type: 'action'},
            classes: 'action',
            target: ['a06', 'a08']
        },
        {
            data: { id: 'a06', desc: '提醒买咖啡豆', type: 'app'},
            classes: 'app',
            target: ['a07']
        },
        {
            data: { id: 'a07', desc: '一号店自动下单', type: 'service'},
            classes: 'service'
        },
        {
            data: { id: 'a08', desc: '开始磨咖啡豆', type: 'action'},
            classes: 'action',
            target: ['a09']
        },
        {
            data: { id: 'a09', desc: '开始煮咖啡', type: 'action'},
            classes: 'action',
            target: ['a10']
        },
        {
            data: { id: 'a10', desc: '是否煮好', type: 'action'},
            classes: 'action',
            target: ['a12', 'a13']
        },
        {
            data: { id: 'a12', desc: '开始闹铃提醒起床', type: 'app'},
            classes: 'app'
        },
        {
            data: { id: 'a13', desc: '发微博我在几点做咖啡', type: 'service'},
            classes: 'service'
        }
    ];

    var dataForAiCoffeeMachine = {"elements":{"nodes":[{"data":{"id":"a01","desc":"智能咖啡壶"},"position":{"x":500,"y":200},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"app root"},{"data":{"id":"a1426399537877","desc":"是否预定时间","type":"action"},"position":{"x":660,"y":200},"group":"nodes","removed":false,"selected":true,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a1426399549812","desc":"自动接通电源","type":"action"},"position":{"x":820,"y":200},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a1426399564213","desc":"检测咖啡豆存量","type":"action"},"position":{"x":976,"y":198},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a1426399578028","desc":"提醒购买咖啡豆","type":"app"},"position":{"x":1140,"y":200},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"app"},{"data":{"id":"a1426399604692","desc":"一号店自动下单","type":"service"},"position":{"x":1300,"y":200},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"service"},{"data":{"id":"a1426399620802","desc":"开始磨咖啡豆","type":"action"},"position":{"x":1136,"y":360},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a1426399632525","desc":"开始煮咖啡","type":"action"},"position":{"x":1296,"y":360},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a1426399641166","desc":"是否煮好","type":"action"},"position":{"x":1456,"y":360},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a1426399660528","desc":"开始闹铃提醒起床","type":"app"},"position":{"x":1616,"y":360},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"app"},{"data":{"id":"a1426399684446","desc":"发微博我在几点做咖啡","type":"service"},"position":{"x":1616,"y":520},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"service"},{"data":{"id":"a1426399698160","desc":"   ","type":"app"},"position":{"x":820,"y":360},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"app"}],"edges":[{"data":{"id":"a14263995378771","source":"a1426399537877","target":"a01"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"a14263995498121","source":"a1426399549812","target":"a1426399537877"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"a14263995642131","source":"a1426399564213","target":"a1426399549812"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"a14263995780281","source":"a1426399578028","target":"a1426399564213"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"a14263996046921","source":"a1426399604692","target":"a1426399578028"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"a14263996208021","source":"a1426399620802","target":"a1426399564213"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"a14263996325251","source":"a1426399632525","target":"a1426399620802"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"a14263996411661","source":"a1426399641166","target":"a1426399632525"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"a14263996605281","source":"a1426399660528","target":"a1426399641166"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"a14263996844461","source":"a1426399684446","target":"a1426399641166"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"a14263996981601","source":"a1426399698160","target":"a1426399537877"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""}]},"style":[{"selector":"node","css":{"text-valign":"center","color":"#999999","content":"data(desc)","font-size":"20px","height":"98px","width":"98px"}},{"selector":":selected","css":{"opacity":"1","background-color":"black","line-color":"black","source-arrow-color":"black","target-arrow-color":"black"}},{"selector":"edge","css":{"width":"1px","line-style":"dashed","line-color":"#1aa9eb","target-arrow-shape":"circle","target-arrow-color":"#1aa9eb"}},{"selector":".app","css":{"background-color":"#fff","border-color":"#1aa9eb","border-width":"1px","border-style":"dashed"}},{"selector":".action","css":{"background-color":"#fff","border-color":"#23c3aa","border-width":"1px","border-style":"dashed"}},{"selector":".service","css":{"background-color":"#fff","border-color":"#ffc90f","border-width":"1px","border-style":"dashed"}},{"selector":".cur","css":{"color":"#333","background-color":"lightyellow"}}],"zoomingEnabled":true,"userZoomingEnabled":true,"zoom":0.7898894154818326,"minZoom":1e-50,"maxZoom":1e+50,"panningEnabled":true,"userPanningEnabled":true,"pan":{"x":-355.4502369668246,"y":-83.5703001579779},"boxSelectionEnabled":false,"layout":{"name":"breadthfirst","directed":true,"padding":10},"renderer":{"name":"canvas"}};

    var relationShipChain = getRelationship(nodeArr);

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

    var datas = {"elements":{"nodes":[{"data":{"id":"a01","desc":"智能咖啡壶","type":"app"},"position":{"x":610,"y":173.25},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"app"},{"data":{"id":"a02","desc":"是否预定时间","type":"action"},"position":{"x":610,"y":346.5},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a03","desc":"手机","type":"app"},"position":{"x":406.66666666666663,"y":519.75},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"app"},{"data":{"id":"a04","desc":"自动接通电源","type":"action"},"position":{"x":813.3333333333334,"y":519.75},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a05","desc":"检测咖啡豆存量","type":"action"},"position":{"x":610,"y":693},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a06","desc":"提醒买咖啡豆","type":"app"},"position":{"x":406.66666666666663,"y":866.25},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"app"},{"data":{"id":"a07","desc":"一号店自动下单","type":"service"},"position":{"x":406.66666666666663,"y":1039.5},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"service"},{"data":{"id":"a08","desc":"开始磨咖啡豆","type":"action"},"position":{"x":813.3333333333334,"y":866.25},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a09","desc":"开始煮咖啡","type":"action"},"position":{"x":813.3333333333334,"y":1039.5},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a10","desc":"是否煮好","type":"action"},"position":{"x":610,"y":1212.75},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"action"},{"data":{"id":"a12","desc":"开始闹铃提醒起床","type":"app"},"position":{"x":406.66666666666663,"y":1386},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"app"},{"data":{"id":"a13","desc":"发微博我在几点做咖啡","type":"service"},"position":{"x":813.3333333333334,"y":1386},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"service"}],"edges":[{"data":{"source":"a01","target":"a02","id":"e0"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"a02","target":"a03","id":"e1"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"a02","target":"a04","id":"e2"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"a04","target":"a05","id":"e3"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"a05","target":"a06","id":"e4"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"a05","target":"a08","id":"e5"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"a06","target":"a07","id":"e6"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"a08","target":"a09","id":"e7"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"a09","target":"a10","id":"e8"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"a10","target":"a12","id":"e9"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"a10","target":"a13","id":"e10"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""}]},"style":[{"selector":"node","css":{"text-valign":"center","color":"#999999","content":"data(desc)","font-size":"20px","height":"98px","width":"98px"}},{"selector":":selected","css":{"opacity":"1","background-color":"black","line-color":"black","source-arrow-color":"black","target-arrow-color":"black"}},{"selector":"edge","css":{"width":"1px","line-style":"dashed","line-color":"#1aa9eb","target-arrow-shape":"circle","target-arrow-color":"#1aa9eb"}},{"selector":".app","css":{"background-color":"#fff","border-color":"#1aa9eb","border-width":"1px","border-style":"dashed"}},{"selector":".action","css":{"background-color":"#fff","border-color":"#23c3aa","border-width":"1px","border-style":"dashed"}},{"selector":".service","css":{"background-color":"#fff","border-color":"#ffc90f","border-width":"1px","border-style":"dashed"}},{"selector":".cur","css":{"background-color":"#ff9900","border-color":"#ffc90f","border-width":"1px","border-style":"dashed"}}],"zoomingEnabled":true,"userZoomingEnabled":true,"zoom":0.4269106155898609,"minZoom":1e-50,"maxZoom":1e+50,"panningEnabled":true,"userPanningEnabled":true,"pan":{"x":345.3154183342863,"y":-42.83018867924528},"boxSelectionEnabled":false,"layout":{"name":"breadthfirst","directed":true,"padding":10},"renderer":{"name":"canvas"}};

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
        elements:
            {
                nodes:dataForAiCoffeeMachine.elements.nodes,
                edges:dataForAiCoffeeMachine.elements.edges
            },
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

            var appController = {
                config: function (){
                    // lock nodes
                    cy.reset()
                        .center()
                        .fit(cy.$('*'));
                    //cy.autolock( false )
                    //    .zoom({level: 1.0})
                    //    .userZoomingEnabled(false);
                        // center nodes block
                        //.center(cy.elements());
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
                        var removeNodeSequence = [];

                        // add it self to remove sequence
                        removeNodeSequence.push(curNode);

                        // get descendant
                        for(;;){
                            var connectedEdges = nodes.connectedEdges(function(){
                                return !this.target().anySame( nodes );
                            });

                            var connectedNodes = connectedEdges.targets();

                            Array.prototype.push.apply( removeNodeSequence, connectedNodes );

                            nodes = connectedNodes;

                            if( nodes.empty() ){ break; }
                        }

                        // remove nodes
                        for (var i=0; i<removeNodeSequence.length; i++) {
                            var node = removeNodeSequence[i];

                            if (node) node.remove();
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
                        return JSON.stringify(cy.json());
                    }
                },
                init: function (){
                    // config cytoscape
                    this.config();

                    // init node edit
                    this.editNode();

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