(function (root, factory)
{if (typeof define === 'function' && define.amd)
{define(['exports', 'echarts'], factory);}
else if (typeof exports === 'object' && typeof exports.nodeName !== 'string')
{factory(exports, require('echarts'));}
else {factory({}, root.echarts);}}(this, function (exports, echarts)
{var log = function (msg) {if
(typeof console !== 'undefined')
{console && console.error && console.error(msg);}};
    if (!echarts) {log('ECharts is not Loaded');return;}
    if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}
    echarts.registerMap('France',
        {"type":"FeatureCollection",
            "features":
                [
                    {"type":"Feature","properties":{"name":"Ile-de-France"},
                        "geometry":{
                            "type":"Polygon",
                            "coordinates":["@@VB^GHO@SUCMIRIBG\\G@U^MnTPDfA@IVGZFfQXDhA\\MTHG^@VFZVdO\\BdXZBXNvPDHbGCUlMP@TNZO`EPGMMLKtNdBVL^SDGSGMQ^CTDXARLLEfHCL^VDPXDNGvgZ_ZZRCVQnHxMIWXDVJFITAHMrKFIWKAKjAjKFjLEdNIUHGDURGZEAMXIZLNPZDPNjAXOVCTSXMIMREP@^TR@J]fBZHPL\\JWHPRTD`NVS\\GXBTU@E`AbTPELRnOTFRENRPARLXaXEDXdPN@bKBHlGRJON^jPIrIrCVDNKlCMWIIZKTOLO@SP@@KUOCQK@SKNMAI\\BTINBX_`CL]PBZIHWPYEGJKhDhPR]@YdYbRNCPHNPPcKIAULCPOESXGBJZB@KKG\\ETHVOXBLIKYjAHR^BNcMQDUKEURSKgGSB]LWOLKZG^HL[CO]EEJWCIIWeZM^DHFRG@SPMtBEQDUGUZOMKDOaGYSFS^SIWBOhH\\TR@fGDSZ@bMTSc@IMIRQFMkBQSWGOKX[DMNIUG_UQCa@UJQ@QKf[FOPSAK[BKISDaWPM@QVQ@GIYMMDI^EHKNBMgAMgFWLO@OIIWDSaBaAmJGI[PQE]@KQOGMFqFmMSNgNIMuDWIKBQIKUQAALUAQJaIOHOES_@ONC{uZKOIVSISfGASJY_@Y]HIQMMQEM_D_GCW_A_SKSFSÍMOQeSIGUAIGgDIVJPEFXP_PCGYFYEWGaJDKZKDOQEI[OQBmASCe^IDcEeIkBMAGTA_YA[FW@UMWFBLPBRJNVNBR`pOVTCPOLRNELTDCXMPATMD@Zm@OLFJUL]IOJ[AQLKfLTGZ_\\GB}MW@WPGAMXOAGLUCcmyNWYSGHdW@R\\a@KNQCONgQ@IM_{DHSPKyBqCFTQ@]OAISAwD@IWK_JIE_CIDuDAPMAKZhVIJPJ[ZNHCVTHBROXS@PTFT]JeBWCBNMDLPRJI`OVBLM@AS]CEMsDMA[NS@_jYCeBDLWRJHUJJPOFOvZxQAQJONFJMHYDQES@cJOPbjGR_EKFe@UDQLHJQJBLiVQBeZCLNHEHNZiHQFGN\\LGFZRtzaRCFqDCFLRMHIZHTEJ^TOXBLTDHHWJQBNb_JSCWN\\dUVWNNJMXJJPULTZSAEPMHJJ^LERSIgDOKS\\fZ@LKDFPgRBRYXDNbP\\QRATNPFTfNUhJdIVHHJLJK^RKPRPHRXLVZ@`NNHZNJIPLHCLN\\GLJNVJJLVJBF"],
                            "encodeOffsets":[[1746,50414]]
                        }
                    }
                ],
            "UTF8Encoding":true
        });
}));

