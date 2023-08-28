class Webservices {
	// static webserviceXmlStructure:string =
	// 	`<?xml version=\"1.0\" encoding=\"utf-8\"?>
	// 		<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">
	// 		<soap:Body>
	// 			{{body}}
	// 		</soap:Body>
	// 	</soap:Envelope>`;

	// static webservicesBody = {
  //       getValoresSeriesVO:
	// 			`<getValoresSeriesVO>
	// 					<ArrayOfflong>
	// 					<item>{{idSerie}}</item>
	// 					</ArrayOfflong>
	// 					<in1>{{start}}</in1>
	// 					<in2>{{end}}</in2>
	// 				</getValoresSeriesVO>`,
  //       getUltimosValoresSerieVO:
	// 				`<getUltimosValoresSerieVO>
	// 					<in0>{{idSerie}}</in0>
	// 					<in1>{{length}}</in1>
	// 				</getUltimosValoresSerieVO>`,
  //       getValoresSeriesXML:
	// 				`<getValoresSeriesXML>
	// 					<ArrayOfflong>
	// 						<item>{{idSerie}}</item>
	// 					</ArrayOfflong>
	// 					<in1>{{start}}</in1>
	// 					<in2>{{end}}</in2>
	// 				</getValoresSeriesXML>`,
  //       getUltimoValorVO:
	// 				`<getUltimoValorVO>
	// 					<in0>{{idSerie}}</in0>
	// 				</getUltimoValorVO>`,
  //       getUltimoValorXML:
	// 				`<getUltimoValorXML>
	// 					<in0>{{idSerie}}</in0>
	// 				</getUltimoValorXML>`,
  //       getValor:
	// 				`<getValor>
	// 					<in0>{{idSerie}}</in0>
	// 					<in1>{{end}}</in1>
	// 				</getValor>`,
  //       // getValorEspecial: `EM BUSCA DO ID ESPECIAS`
  //   };

	constructor() {}

	//private webservicesExec({endpoint, query}: {endpoint:string, query:Query}) {
    // Promise.all(Object.entries(bodies).map(([endpoint, body]) => {
    //     return new Promise((res,rej) => {
    //         axios({
    //             url: 'https://www3.bcb.gov.br/wssgs/services/FachadaWSSGS',
    //             method: 'POST',
    //             timeout: 0,
    //             headers: {
    //               'Content-Type': 'text/xml; charset=utf-8',
    //               SOAPAction: '',
    //               Cookie: 'TS01c46804=012e4f88b379980ae06801b44c0b548fd2836888ecaeee890718a0cbe784c8b7c8ecd7b8a1a5b19c18358458e07c3137b19974e1ecdefa14334c411c19c78beecf794265fb; dtCookie=E75E4270D92D90E4E37413D1C20AE3EC|c2dzfDE; BIGipServer~was_p_as3~was_p~pool_was_443_p=1020268972.47873.0000; BIGipServer~was_p_as3~was_p~pool_was_sazonal_443_p=3704623532.47873.0000; JSESSIONID=0000n9aBf5_lvhZqQRJKQF1_9r2:1dai8m94c; TS012b7e98=012e4f88b39a176b8acc4bcd0ed58851bd792819eac9c996188b8cd35bb7f17c0d7190631ef5a93e2f518a6db03668eb016a8ca6cb38ab763f3b81513dff12506bf21fe44504c5bc45e70bd654ae5df8686a50ab42de03efd37fe4c64ddf3f8c5e6fbdb8684dc298f71e31f2bf098acab0545c1f24; cookie_p=!/PpJGZ2Q7g4q9GEdwXJzSPVoLSm8xRZ3AlmlE4jkRG+F4fnF1KUxP8I+Lr+NW4aIJf25LG49RG/oAe0='
    //             },
    //             data: skeleton.replace('{{body}}', body),
    //         }).then(
    //             async ({status, data:xml}) => {
    //                 if(status != 200)
    //                     return; //console.log(`Error ${status}`);

    //                 res([endpoint, xml]);
    //             },
    //             ({response:{status, data}}) => console.log(`Status error: ${status}\nData: ${data}`)
    //         );
    //     });
    // })).then(
    //     responses => {
    //         console.log(JSON.stringify(responses));
    //     },
    //     error => console.log('Algo deu errado =(')
    // )

	// 	return {
	// 		webservice :true
	// 	}
	// }
}

export default Webservices;