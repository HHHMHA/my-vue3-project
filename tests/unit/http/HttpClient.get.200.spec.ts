import {expect} from "chai";
import sinon from 'sinon'
import axios, {AxiosRequestConfig, InternalAxiosRequestConfig} from "axios";
import {HttpClient, HttpRequestParamsInterface} from '@/models/http-client'
import {MockedPromiseFactory} from "./MockedPromiseFactory";

const mockParams: HttpRequestParamsInterface = {
    url: 'something/something',
    requiresToken: false
}

describe('HttpClient.get', () => {
    before(() => {
        const mockedRequestConfig = {
            headers: {}
        } as InternalAxiosRequestConfig;

        const mockedPromise = MockedPromiseFactory({
            url: mockParams.url,
            statusCode: 200,
            statusText: "Success",
            requestConfig: mockedRequestConfig,
            data: "get completed",
            reject: false,
        });

        sinon.stub(axios, 'get').withArgs(mockParams.url, mockedRequestConfig)
            .returns(mockedPromise);
    });

    after(() => {
        sinon.restore();
    })

    it('should succeed and return data', (done) => {
        HttpClient.get<string>(mockParams).then((response: string) => {
            expect(response).to.equal('get completed');
            done();
        })
    })
})
