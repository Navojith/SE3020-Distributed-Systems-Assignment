import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PaymentsController } from '../payments/paymnets.controller';
import { paymentProviders } from './payments.providers';
import { PaymentsService } from './paymnets.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PaymentsController],
    providers: [...paymentProviders, PaymentsService],
})

export class PaymentsModule {}