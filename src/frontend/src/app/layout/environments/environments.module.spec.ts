import { EnvironmentsModule } from './environments.module';

describe('EnvironmentsModule', () => {
    let environmentsModule: EnvironmentsModule;

    beforeEach(() => {
        environmentsModule = new EnvironmentsModule();
    });

    it('should create an instance', () => {
        expect(environmentsModule).toBeTruthy();
    });
});
