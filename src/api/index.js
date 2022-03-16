import { __decorate } from "tslib";
import ajax, { createApi } from '@/api/ajax';
import { baseUrl, fileUrl } from '@/config.json';
export class Api {
    constructor() {
        this.request = ajax;
        /**
         * 上传文件-营销短信
         */
        this.uploadFile1 = ({ fileItem, onProgress = null }, showMsg) => {
            const data = new FormData();
            data.append('file', fileItem);
            // data.append('appType', 'web')
            return ajax({
                url: fileUrl + '/marketing/upload',
                data,
                method: 'post',
                showMsg,
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: onProgress
            });
        };
        /**
         * 上传文件-黑名单
         */
        this.uploadFile = ({ fileItem, onProgress = null }, showMsg) => {
            const data = new FormData();
            data.append('file', fileItem);
            // data.append('appType', 'web')
            return ajax({
                url: fileUrl + '/blacklist/upload',
                data,
                method: 'post',
                showMsg,
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: onProgress
            });
        };
    }
}
__decorate([
    createApi({ url: baseUrl + '/user/login' })
], Api.prototype, "login", void 0);
__decorate([
    createApi({ url: baseUrl + '/statistics/trend', method: 'get' })
], Api.prototype, "getStatisticsTrend", void 0);
__decorate([
    createApi({ url: baseUrl + '/statistics/count', method: 'get' })
], Api.prototype, "getStatisticsCount", void 0);
__decorate([
    createApi({ url: baseUrl + '/statistics/top10', method: 'get' })
], Api.prototype, "getStatisticsTop10", void 0);
__decorate([
    createApi({ url: baseUrl + '/statistics/countForConfig', method: 'get' })
], Api.prototype, "getStatisticsCountForConfig", void 0);
__decorate([
    createApi({ url: baseUrl + '/statistics/rateForConfig', method: 'get' })
], Api.prototype, "getStatisticsRateForConfig", void 0);
__decorate([
    createApi({ url: baseUrl + '/statistics/marketingTrend', method: 'get' })
], Api.prototype, "getStatisticsMarketingTrend", void 0);
__decorate([
    createApi({ url: baseUrl + '/signature/page', method: 'get' })
], Api.prototype, "getSignaturePage", void 0);
__decorate([
    createApi({ url: baseUrl + '/signature', method: 'post' })
], Api.prototype, "addSignature", void 0);
__decorate([
    createApi({ url: baseUrl + '/signature', method: 'put' })
], Api.prototype, "editSignature", void 0);
__decorate([
    createApi({ url: baseUrl + '/signature', method: 'delete' })
], Api.prototype, "deleteSignature", void 0);
__decorate([
    createApi({ url: baseUrl + '/template/page', method: 'get' })
], Api.prototype, "getTemplate", void 0);
__decorate([
    createApi({ url: baseUrl + '/template', method: 'post' })
], Api.prototype, "addTemplate", void 0);
__decorate([
    createApi({ url: baseUrl + '/template', method: 'put' })
], Api.prototype, "editTemplate", void 0);
__decorate([
    createApi({ url: baseUrl + '/template', method: 'delete' })
], Api.prototype, "deleteTemplate", void 0);
__decorate([
    createApi({ url: baseUrl + '/config/page', method: 'get' })
], Api.prototype, "getConfigPage", void 0);
__decorate([
    createApi({ url: baseUrl + '/config', method: 'post' })
], Api.prototype, "addConfig", void 0);
__decorate([
    createApi({ url: baseUrl + '/config', method: 'put' })
], Api.prototype, "editConfig", void 0);
__decorate([
    createApi({ url: baseUrl + '/config', method: 'delete' })
], Api.prototype, "deleteConfig", void 0);
__decorate([
    createApi({ url: baseUrl + '/config/level', method: 'post' })
], Api.prototype, "postConfigLevel", void 0);
__decorate([
    createApi({ url: baseUrl + '/config', method: 'get' })
], Api.prototype, "getDetailsConfig", void 0);
__decorate([
    createApi({ url: baseUrl + '/signature/customPage', method: 'get' })
], Api.prototype, "getSignatureCustomPage", void 0);
__decorate([
    createApi({ url: baseUrl + '/template/customPage', method: 'get' })
], Api.prototype, "getTemplateCustomPage", void 0);
__decorate([
    createApi({ url: baseUrl + '/config/other', method: 'put' })
], Api.prototype, "editConfigOther", void 0);
__decorate([
    createApi({ url: baseUrl + '/platform/page', method: 'get' })
], Api.prototype, "getPlatformPage", void 0);
__decorate([
    createApi({ url: baseUrl + '/platform', method: 'post' })
], Api.prototype, "addPlatform", void 0);
__decorate([
    createApi({ url: baseUrl + '/platform', method: 'put' })
], Api.prototype, "editPlatform", void 0);
__decorate([
    createApi({ url: baseUrl + '/platform', method: 'delete' })
], Api.prototype, "deletePlatform", void 0);
__decorate([
    createApi({ url: baseUrl + '/platform', method: 'get' })
], Api.prototype, "getPlatform", void 0);
__decorate([
    createApi({ url: baseUrl + '/log/receivePage', method: 'get' })
], Api.prototype, "getLogReceivePage", void 0);
__decorate([
    createApi({ url: baseUrl + '/log/sendPage', method: 'get' })
], Api.prototype, "getLogSendPage", void 0);
__decorate([
    createApi({ url: baseUrl + '/marketing/page', method: 'get' })
], Api.prototype, "getMarketingPage", void 0);
__decorate([
    createApi({ url: baseUrl + '/marketing', method: 'post' })
], Api.prototype, "addMarketing", void 0);
__decorate([
    createApi({ url: baseUrl + '/marketing', method: 'put' })
], Api.prototype, "editMarketing", void 0);
__decorate([
    createApi({ url: baseUrl + '/template/paramFields', method: 'get' })
], Api.prototype, "getTemplateParamFields", void 0);
__decorate([
    createApi({ url: baseUrl + '/template/build', method: 'post' })
], Api.prototype, "postTemplateBuild", void 0);
__decorate([
    createApi({ url: baseUrl + '/signature/page', method: 'get' }, (res) => {
        return res.records.map((obj) => ({ label: obj.name, value: obj.code }));
    })
], Api.prototype, "getSignatureSelect", void 0);
__decorate([
    createApi({ url: baseUrl + '/template/page', method: 'get' }, (res) => {
        return res.records.map((obj) => ({ label: obj.name, value: obj.code }));
    })
], Api.prototype, "getTemplateSelect", void 0);
__decorate([
    createApi({ url: baseUrl + '/marketing', method: 'delete' })
], Api.prototype, "deleteMarketing", void 0);
__decorate([
    createApi({ url: baseUrl + '/marketing/audit', method: 'put' })
], Api.prototype, "examineMarketingAudit", void 0);
__decorate([
    createApi({ url: baseUrl + '/statistics/count/page', method: 'get' })
], Api.prototype, "getStatisticsCountPage", void 0);
__decorate([
    createApi({ url: baseUrl + '/statistics/marketingCount/page', method: 'get' })
], Api.prototype, "getStatisticsMarketingCountPage", void 0);
__decorate([
    createApi({ url: baseUrl + '/marketing/reSend', method: 'put' })
], Api.prototype, "editMarketingReSend", void 0);
__decorate([
    createApi({ url: baseUrl + '/log/sendLogPage', method: 'get' })
], Api.prototype, "getLogSendLogPage", void 0);
__decorate([
    createApi({ url: baseUrl + '/blacklist/page', method: 'get' })
], Api.prototype, "getBlacklistPage", void 0);
__decorate([
    createApi({ url: baseUrl + '/blacklist', method: 'post' })
], Api.prototype, "addBlacklist", void 0);
__decorate([
    createApi({ url: baseUrl + '/blacklist', method: 'put' })
], Api.prototype, "editBlacklist", void 0);
__decorate([
    createApi({ url: baseUrl + '/blacklist', method: 'delete' })
], Api.prototype, "deleteBlacklist", void 0);
export default new Api();
//# sourceMappingURL=index.js.map